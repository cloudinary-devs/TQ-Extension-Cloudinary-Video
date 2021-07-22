// noinspection JSJQueryEfficiency

const jQuery = require('jquery');
cssInject = require('./cssInjector');
/**
 * This class provides a "virtual" browser for displaying fake
 * web pages and images.
 *
 */
module.exports = new class Browser {

    browser;

    constructor() {
        this.browser = jQuery('#cloudinary-browser');

        if(this.browser) {
            jQuery('#cloudinary-browser').remove();
        }

        jQuery('#app div.App').append(`
            <div id="cloudinary-browser" class="Conversation">
                <div class="frosty"></div>
                <div id="browser-content" class="dialogue-box">
                <img alt="sample image" src="https://res.cloudinary.com/joelsimpson/image/upload/v1621272505/samples/animals/kitten-playing.gif">
                </div>
            </div>
        `);

        this.browser = jQuery('#cloudinary-browser').hide();
    }

    show() {
        cssInject('cloudinary.css');//@todo-p2 remove after styles are stable
        this.browser.show();
    }

    hide() {
        this.browser.hide();
    }

    toggle(){
        this.browser.toggle();
    }
}

