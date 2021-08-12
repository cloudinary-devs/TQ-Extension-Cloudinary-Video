// noinspection JSJQueryEfficiency

jQuery = require('jquery');
inject = require('./injector');
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
                    <div class="header"> 
                        <div class="title">Cloudinary</div>
                        <div class="close-button" onclick="CloudinaryBrowser.hide()">X</div>
                    </div>
                    
                    <div id="browser-content"><!-- Where the content renders --></div>
                    
                </div>

            </div>
        `);

        this.browser = jQuery('#cloudinary-browser').hide();

        //Add some global references to make it easy to interoperate
        window.CloudinaryBrowser = this.browser;
    }

    show() {

        //@todo-p2 remove after styles are stable
        //refresh styles in case they've been updated while we dev
        inject.css('cloudinary.css');

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
    display(content) {
        this.browser.show();
        jQuery('#cloudinary-browser #browser-content').html(content);
    }
}