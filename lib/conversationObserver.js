const jQuery = require('jquery');

module.exports = new class ConversationObserver {

    /**
     * Holds a history of the options chosen by the user during past conversations
     * @type {[]}
     */
    history = [];

    /**
     * Watches for element changes
     * @type MutationObserver
     */
    observer;

    debugOutput = false;

    constructor() {
        let self = this;
        this.observer = new MutationObserver((mutations) => {
            this.debugOutput && console.log(mutations);
            /**
             * Find all choices and attach a console logger
             */
            let choices = jQuery('div#dialogue-inner div.conversationChoice');
            //console.log('Attaching eavesdropper to ' + choices.length + ' conversation choices');
            choices.unbind('click.obs');//remove old if any, elements are sometimes re-used (cause react ¯\_(ツ)_/¯)
            choices.bind('click.obs', function () {
                self.history.push(jQuery(this).text());
                self.debugOutput && console.log('User selected:'+jQuery(this).text());
            })
        });

    }

    start(whichNode) {
        if(whichNode === undefined){
            whichNode = jQuery('#app div.App')[0];
        }
        //watch the node and all sub nodes for changes - a bit brute force
        this.observer.observe(whichNode, {childList: true, subtree: true, attributes: false, characterData: false});
    }

    stop() {
        this.observer.disconnect();
    }
}