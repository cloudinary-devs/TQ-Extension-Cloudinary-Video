module.exports = new class ConversationObserver {
    /**
     * Watches for element changes
     * @type MutationObserver
     */
    observer;

    /**
     * Holds a history of the options chosen by the user during past conversations
     * @type {[]}
     */
    history = [];

    constructor() {
        let self = this;
        this.observer = new MutationObserver((mutations) => {
            //console.log(mutations);
            /**
             * Find all choices and attach a console logger
             */
            let choices = jQuery('div#dialogue-inner div.conversationChoice');
            //console.log('Attaching eavesdropper to ' + choices.length + ' conversation choices');
            choices.unbind('click.obs');//remove old if any, elements are sometimes re-used (react ¯\_(ツ)_/¯)
            choices.bind('click.obs', function () {
                self.history.push(jQuery(this).text());
                //console.log('User selected:'+jQuery(this).text());
            })
        });

    }

    start(whichNode) {
        //watch the node and all sub nodes for changes - a bit brute force
        this.observer.observe(whichNode, {childList: true, subtree: true, attributes: false, characterData: false});
    }

    stop() {
        this.observer.disconnect();
    }
}