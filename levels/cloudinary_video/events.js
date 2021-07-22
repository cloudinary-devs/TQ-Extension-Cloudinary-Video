// noinspection JSJQueryEfficiency

const jQuery = require('jquery');
const cssInject = require('../../lib/cssInjector');
const observer = require('../../lib/conversationObserver');
const keyHandler =  require('../../lib/keyboardHandler');
const browser =  require('../../lib/browser');

module.exports = function (event, world) {
    /**
     * Some dev mode stuff
     * warp('cloudinary_video','player_entry1','default');
     */
    if (process.env.USER === 'jsimpson') { //replace with your username
        if (event.name === 'levelDidLoad') {
            //DEV MODE
            //Set javascript sources to be reloaded instead of cached
            window.reloadExternalModules = true;
            //console.clear(); //clear out all the platform errors/warnings that occur at startup
            console.log('Cloudinary Video Mission loaded');
        }
        //log all events in dev mode
        console.log({event, world});
    }
    /**
     * after set, before physics
     * world.__internals.level.player.sprite.body.velocity
     *      world.__internals.level.player.sprite.postUpdate
     *      .prePhysicsUpdate
     */

    /**
     * Main logic
     */
    switch (event.name) {

        case 'levelDidLoad':
            //@todo-p1 Add a step here to set a level specific event handler [strategy-pattern]

            //Start our conversation eavesdropper, listening on the top level app node
            observer.start(jQuery('#app div.App')[0]);
            //Inject our custom css for the file browser, sign posts and other functionality
            cssInject('cloudinary.css');

            break;
        case 'objectiveDidOpen' :

            break;
        case 'conversationDidEnd':
            console.table(observer.history);
            switch (event.npc.conversation) {
                case 'cedricDefault':

            }
            observer.history = [];//clear out the history?
            break;
        case 'triggerAreaWasEntered':
            //browser.show();
            //Used primarily for rooms/areas
            switch (event.target.key) {
                case 'wakeup':
                    world.startConversation('m2-cedric-wakeup','cedricNeutral.png');

                    break;
                case 'testTrigger':
                    console.log('Area Triggered');
                    world.startConversation("cedricDefault", "cedricNeutral.png");
                    break;
                default:
                    console.log('UNHANDLED AREA TRIGGER:' + event.target.key);
            }
            break;
        case 'playerDidInteract':
            //is this start of a conversation?

            if (event.target.conversation) {
                //the conversation hasn't started yet, it's about to.
                switch (event.target.conversation) {

                }
            } else if (event.target.objectiveName) {
                //An objective is about to start
            }

            break;
        case 'levelWillUnload':
            //cleanly stop our conversation eavesdropper
            //observer.stop();
            break;
        case 'triggerAreaWasExited':
            browser.hide();
            //nothing to do... so far
            break;
        case 'mapDidLoad':
            document.addEventListener('keydown',function(event){
                switch (event.key){
                    case 'b':
                        browser.toggle();
                        break;
                    default:
                    //nothing

                }
            });
            //keyHandler.registerAction('b',function(){alert('B pressed.')});
            break;


        default:
            console.log(`WARNING: unhandled event name "${event.name}"`);
    }

    function getTriggerAreaProperties(triggerName,world){
        ///world.__internals game.map.objects['type=tiggerArea','name=triggerName'];
    }
}

