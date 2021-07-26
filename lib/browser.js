// noinspection JSJQueryEfficiency

jQuery = require('jquery');
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

        if (this.browser) {
            jQuery('#cloudinary-browser').remove();
        }

        jQuery('#app div.App').append(`
            <div id="cloudinary-browser" class="Conversation">
                <div class="frosty"></div>
                <div class="dialogue-box">
                    
                        <div class="title"></div>
                        <div class="close-button" onclick="CloudinaryBrowser.hide()">X</div>
                    
                    <div id="browser-content"><!-- Where teh content goes --></div>
                </div>
            </div>
        `);

        this.browser = jQuery('#cloudinary-browser').hide();

        //Add some global references to make it easy to interoperate
        window.CloudinaryBrowser = this.browser;
    }

    show() {
        cssInject('cloudinary.css');//@todo-p2 remove after styles are stable
        this.browser.show();
    }

    hide() {
        this.browser.hide();
    }

    toggle() {
        this.browser.toggle();
    }

    /**
     * @param content string html to rendered to the browser
     */
    render(content) {
        jQuery('#cloudinary-browser #browser-content').html(content);
    }
}

