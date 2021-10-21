const state = require('./state');

module.exports = class KeyboardHandler {

    world;

    /**
     * @type Browser
     */
    browser;

    constructor(world, browser) {
        this.world = world;
        this.browser = browser;
    }

    start() {
        //Attach/replace key listener
        let body = jQuery('body');
        let self = this;
        body.unbind('keydown.cloudinary')
        body.bind('keydown.cloudinary', function (event) {
            let hackDialogOpen = jQuery('.HackInterface').length > 0;
            let conversationOpen = jQuery('div.Conversation:not(#cloudinary-browser)').length > 0;

            if (!hackDialogOpen && !conversationOpen) {
                /**
                 * Keys/functions that would interfere with data entry, so only trigger when dialogs aren't in use
                 */

                switch (event.key) {
                    case 'b': //show cloudinary browser
                        self.browser.toggle();
                        break;
                    case 'e': //show Cloudinary URL Explorer Browser
                        self.browser.showUrlExplorer();
                        break;
                    case '+':
                        self.world.__internals.level.player.moveSpeed += 60;
                        console.debug('setting movement speed:' + self.world.__internals.level.player.moveSpeed);
                        break;
                    case '-':
                        self.world.__internals.level.player.moveSpeed -= 60;
                        console.debug('setting movement speed:' + self.world.__internals.level.player.moveSpeed);
                        break;
                    case 'c':
                        console.debug('Dev/Debug Cheat mode ' + (state.toggleCheatMode() ? 'enabled' : 'disabled'));
                        break;
                }

                /**
                 * SPRINTING ON
                 */
                //When shift is pressed, sprint about 2/3 faster than default walk speed (120)
                if (!!event.shiftKey) {//double negative is important for truth
                    self.world.__internals.level.player.moveSpeed = 220;
                }

            } else {
                /**
                 * Key actions that are safe to trigger anywhere
                 */

                switch (event.key) {
                    case 'Escape':
                        self.browser.hide();
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

            /**
             * SPRINTING OFF
             */
            if (!hackDialogOpen && !conversationOpen) {
                if (!event.shiftKey) {//set regular movement speed
                    self.world.__internals.level.player.moveSpeed = 120;
                }
            }
        });
    }

}
