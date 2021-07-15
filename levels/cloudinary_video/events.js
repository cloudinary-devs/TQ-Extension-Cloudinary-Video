jQuery = require('jquery');
const cssInject = require('../../lib/cssInjector');
const observer = require('../../lib/conversationObserver');

module.exports = function (event, world) {
    //@todo-p1 remove before commit

    /**
     * Some dev mode stuff
     * warp('cloudinary_video','player_entry1','default');
     */
    if (process.env.USER === 'jsimpson') {
        if (event.name === 'levelDidLoad') {
            //DEV MODE
            //Set javascript sources to be reloaded instead of cached
            window.reloadExternalModules = true;
            console.clear(); //clear out all the platform errors/warnings that occur at startup
            console.log('Cloudinary Video Mission loaded');
        }
        //log all events in dev mode
        console.log(event);
    }

    /**
     * Main logic
     */
    switch (event.name) {
        case 'levelDidLoad':

            //Start our conversation eavesdropper
            observer.start(jQuery('#app div.App')[0]);
            //Inject our custom css for the file browser, sign posts and other functionality
            cssInject('cloudinary.css');

            break;
        case 'objectiveDidOpen' :
            world.startConversation("cedricDefault", "cedricNeutral.png");
            break;
        case 'conversationDidEnd':
            console.table(observer.history);


            switch (event.npc.conversation) {
                case 'cedricDefault':
                    jQuery('#app div.App').append(`<div style="    z-index: 2000;
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        font-size: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;">
                        <div style="width:200px;height:200px;margin:0 auto;color:white;background-color:red">TEST
                        <img src="https://res.cloudinary.com/joelsimpson/image/upload/v1621272505/samples/animals/kitten-playing.gif">
                        </div></div>`);
            }
            break;
        case 'triggerAreaWasEntered':
            //Used primarily for rooms/areas
            switch (event.target.key) {
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
            if (event.target && event.target.conversation) {
                //the conversation hasn't started yet, it's about to.
                switch (event.target.conversation) {

                }
            }

            break;
        case 'levelWillUnload':
            //cleanly stop our conversation eavesdropper
            //observer.stop();

            break;
        case 'triggerAreaWasExited':
            //nothing to do... so far
            break;
        case 'mapDidLoad':
            //nothing to do... so far
            break;


        default:
            console.log(`WARNING: unhandled event name "${event.name}"`);
    }

}

