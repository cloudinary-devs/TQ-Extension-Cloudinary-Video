// const jQuery = require('jquery');
const inject = require('../../lib/injector');
const observer = require('../../lib/conversationObserver');
const keyHandler = require('../../lib/keyboardHandler');
const browser = require('../../lib/browser');
// const state = require('../../lib/state');
const setHackFormDefaults = require('../../lib/hackFormDefaultValues');

console.log('Cloudinary Video Mission Started (event.js loaded)');

module.exports = function (event, world) {

    /**
     * Some dev mode stuff
     */
    if (process.env.USER === 'jsimpson') { //replace with your username or another dev mode flag
        if (event.name === 'levelDidLoad') {
            //Set javascript sources to be reloaded instead of cached
            window.reloadExternalModules = true;
            console.clear(); //clear out all the platform errors/warnings that occur at startup
        }
        //log all events in dev mode
        console.debug({event, world});
    }

    //CAN HAZ HAX PLZ?
    window.world = world;

    /**
     * Main Extension/'Level' logic
     */
    switch (event.name) {

        case 'levelDidLoad':
            //nothing to do... so far
            break;

        case 'mapDidLoad':

            //Start our conversation eavesdropper
            observer.start();

            //Inject our custom css for the file browser, sign posts and other functionality
            inject.css('cloudinary.css');

            //Start handler for triggering our special features
            (new keyHandler(world,browser)).start();

           break;

        case 'objectiveDidOpen' :
            //@todo-p2 refactor into a generic call to objectives/<objective_name>/event.js:objectiveDidOpen() call?
            switch (event.target.objectiveName) {
                case 'm1_o2_sign_up':
                    //Re-enter player's information if we have already saved it
                    let env = world.getContext().env;
                    setHackFormDefaults([
                        env.TQ_CLOUDINARY_CLOUD_NAME ? env.TQ_CLOUDINARY_CLOUD_NAME.value : null,
                        env.TQ_CLOUDINARY_API_KEY ? env.TQ_CLOUDINARY_API_KEY.value : null,
                        env.TQ_CLOUDINARY_API_SECRET ? env.TQ_CLOUDINARY_API_SECRET.value : null,
                    ]);

                    break;
                case 'm5_o4_transitions':
                    //commenting out, because we can put the url into the objective for reference...left here as example
                    //setHackFormDefaults([state.getAnswers('m5_o3_combining_clips').value().answer3,'','']);
                    break;
            }
            break;
        case 'objectiveDidClose':
        case 'objectiveCompleted':
        case 'objectiveCompletedAgain' :
        case 'objectiveFailed':
            break;
        case 'conversationDidEnd':
            //@todo-p2 refactor into a generic call to objectives/<objective_name>/event.js:conversationDidEnd() call?
            console.table(observer.history);
            switch (event.npc.conversation) {
                case 'm2-cedric-Default':

            }
            observer.history = [];//clear out the history?
            break;

        case 'triggerAreaWasEntered':
            if(event.target.observation){
                switch(event.target.observation){
                    case 'leaving':
                        //and moving towards the exit
                        if(world.__internals.level.player.keys.left.isDown) {
                            world.showNotification('This exit will take you out of the Cloudinary Video Adventure and back to the Fog Owl.');
                        }
                        break;
                }
            }

            console.log({triggerAreaTarget: event.target});
            break;
        case 'playerDidInteract':
            //Is the player starting a conversation with one of our custom objects?
            if (event.target.conversation && event.target.type.startsWith('cloudinary')) {
                //start the conversation
                world.startConversation(event.target.conversation, event.target.conversationAvatar);
            }
            break;
        case 'levelWillUnload':
            //cleanly stop our conversation eavesdropper
            //observer.stop();
            break;
        case 'triggerAreaWasExited':
            browser.hide();
            break;

        default:
            console.warn(`Cloudinary received unknown event named "${event.name}"`,);
    }

}