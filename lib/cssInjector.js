const jQuery = require('jquery');
const path = require('path');
const fs = require('fs');

/**
 * Injects css files from the /css folder into the app at run-time.
 * Catches errors to fail safe so watch the console for errors.
 * @param cssFileName
 */
module.exports = function (cssFileName) {
    const token = cssFileName.replace('.css', ''); //a unique id for keeping track of the script element we're creating.
    const cssPath = path.resolve(__dirname, '..', 'css', cssFileName);

    try {
        fs.readFile(cssPath, (error, data) => {
            try {
                if (error) {
                    console.log('ERROR: Could not find the css file at: ' + cssFileName);
                }

                let styleBlock = jQuery(`#${token}_css`);

                //create the style block if it doesn't exist
                if (styleBlock.length === 0) {
                    styleBlock = jQuery(`<style id="${token}_css"></style>`).appendTo('head')
                }

                //update the style block with the file contents
                styleBlock.text(data.toString());
            } catch (e) {
                console.error(e);
            }
        })
    } catch (e) {
        console.error(e);
    }
}