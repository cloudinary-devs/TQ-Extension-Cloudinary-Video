// noinspection JSJQueryEfficiency

jQuery = require('jquery');
inject = require('./injector');
/**
 * This class provides a "virtual" browser for displaying web pages and images.
 */
module.exports = new class Browser {

    /**
     * @type {jQuery} Reference to the browser window/container
     */
    browser;

    /**
     * @type {jQuery} Reference to the browser's content container
     */
    content;

    constructor() {
        this.browser = jQuery('#cloudinary-browser');

        //remove any old instance to keep things clean
        this.browser && this.browser.remove();

        jQuery('#app div.App').append(`
            <div id="cloudinary-browser" class="Conversation">

                <div class="frosty"></div>

                <div class="dialogue-box">
                
                    <div class="header"> 
                        <div class="title">Cloudinary Explorer</div>
                        <div class="close-button" onclick="CloudinaryBrowser.hide()">X</div>
                    </div>
                    
                    <div id="browser-content"><!-- Where the content renders --></div>
                    
                </div>

            </div>
        `);

        this.browser = jQuery('#cloudinary-browser');
        this.content = jQuery('#cloudinary-browser #browser-content');

        this.hide();

        //Add a global reference to make it easier to interrogate during dev/debugging
        window.CloudinaryBrowser = this;
    }

    // noinspection JSUnusedGlobalSymbols
    showUrlExplorer(url='') {
        inject.css('cloudinary.css');
        this.display(`
        
        <script>
            function updatePlayer(){
                let url=jQuery.trim(jQuery('#url').val());
                jQuery('#player').attr('src',url);
            }
        </script>
        <textarea id="url" wrap="soft" rows="5" style="width:100%" placeholder="Enter a video url here...">${url}</textarea>
        <button onclick="updatePlayer()" style="font-weight:bold;padding:10px;margin:5px 0 20px;">Show It!</button><br>
        <video id="player" autoplay controls style="width:100%"></video>
        `);
    }

    show() {
        //refresh styles in case they've been updated while we live dev
        inject.css('cloudinary.css');
        this.browser.show();
    }

    /**
     *
     * @param clearContent Defaults to true, clear out the content as we hide the browser.  Videos will keep playing even when the window is closed otherwise.
     */
    hide(clearContent = true) {
        this.browser.hide();
        clearContent && this.clearContent();
    }

    clearContent() {
        this.content.html('');
    }

    /**
     * Toggle visibility of the browser
     */
    toggle() {
        inject.css('cloudinary.css');
        this.browser.toggle();
    }

    /**
     * Show the browser with the provided content
     * @param content string html to rendered to the browser
     */
    display(content) {
        this.browser.show();
        this.content.html(content);
    }
}