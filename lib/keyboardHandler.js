module.exports = class KeyboardHandler{

    world;
    browser;

    constructor(world, browser) {
        this.world = world;
        this.browser = browser;
    }

    registerAction(key,action){
        //document.addEventListener('keydown',action);
    }

    start() {
        //Attach/replace key listener
        let body = jQuery('body');
        let self = this;
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
                        self.browser.toggle();
                        break;
                    case '+':
                        self.world.__internals.level.player.moveSpeed += 60;
                        console.log('setting movement speed:' + self.world.__internals.level.player.moveSpeed);
                        break;
                    case '-':
                        self.world.__internals.level.player.moveSpeed -= 60;
                        console.log('setting movement speed:' + self.world.__internals.level.player.moveSpeed);
                        break;
                }

                if (!!event.shiftKey) {//set sprinting speed
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
            if (!hackDialogOpen && !conversationOpen) {
                if (!event.shiftKey) {//set regular movement speed
                    self.world.__internals.level.player.moveSpeed = 120;
                }
            }
        });
    }

}