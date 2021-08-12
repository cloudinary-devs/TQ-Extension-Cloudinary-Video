const jQuery = require('jquery');
const inject = require('../../lib/injector');
const observer = require('../../lib/conversationObserver');
const browser = require('../../lib/browser');
const setHackFormDefaults = require('../../lib/hackFormDefaultValues');

console.log('Cloudinary Video Mission loaded (event.js reloaded)');

module.exports = function (event, world) {

    /**
     * Some dev mode stuff
     */
    if (process.env.USER === 'jsimpson') { //replace with your username
        if (event.name === 'levelDidLoad') {
            //Set javascript sources to be reloaded instead of cached
            window.reloadExternalModules = true;
            //console.clear(); //clear out all the platform errors/warnings that occur at startup
        }
        //log all events in dev mode
        console.log({event, world});
    }

    /**
     * Main Extension/'Level' logic
     */
    switch (event.name) {

        case 'levelDidLoad':
            //nothing to do... so far
            break;

        case 'mapDidLoad':

            //Start our conversation eavesdropper, listening on the top level app node
            observer.start(jQuery('#app div.App')[0]);

            //Inject our custom css for the file browser, sign posts and other functionality
            inject.css('cloudinary.css');

            //Attach/replace key listener
            let body = jQuery('body');
            body.unbind('keydown.cloudinary')
            body.bind('keydown.cloudinary', function (event) {
                let hackDialogOpen = jQuery('.HackInterface').length > 0;
                let conversationOpen = jQuery('div.Conversation:not(#cloudinary-browser)').length > 0;

                /**
                 * Keys/functions that would interrupt data entry, so only trigger when dialogs aren't in use
                 */
                if (!hackDialogOpen && !conversationOpen) {

                    switch (event.key) {
                        case 'b':
                            browser.toggle();
                            break;
                        case '+':
                            world.__internals.level.player.moveSpeed += 60;
                            console.log('setting movement speed:' + world.__internals.level.player.moveSpeed);
                            break;
                        case '-':
                            world.__internals.level.player.moveSpeed -= 60;
                            console.log('setting movement speed:' + world.__internals.level.player.moveSpeed);
                            break;
                    }

                    if (!!event.shiftKey) {//set sprinting speed
                        world.__internals.level.player.moveSpeed = 280;
                    }

                } else {

                    /**
                     * Key actions that are safe to trigger anywhere
                     */

                    switch (event.key) {
                        case 'Escape':
                            browser.hide();
                            break;
                    }
                }
            });

            body.unbind('keyup.cloudinary')
            body.bind('keyup.cloudinary', function (event) {
                let hackDialogOpen = jQuery('.HackInterface').length > 0;
                let conversationOpen = jQuery('div.Conversation:not(#cloudinary-browser)').length > 0;

                /**
                 * Keys/functions that would interrupt data entry, so only trigger when dialogs aren't in use
                 */
                if (!hackDialogOpen && !conversationOpen) {
                    if (!event.shiftKey) {//set regular movement speed
                        world.__internals.level.player.moveSpeed = 120;
                    }
                }
            });
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
                default:
                    //waiting .. .can't put answers in state yet..so can't retrieve them
                    //setHackFormDefaults(world.getState())
                    break;
            }
            break;
        case 'objectiveDidClose':
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
                        world.showNotification('This exit will take you back to the fog owl.');
                        break;
                }
            }

            console.log({triggerAreaTarget: event.target});
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