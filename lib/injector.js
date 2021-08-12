const jQuery = require('jquery');
const path = require('path');
const fs = require('fs');

/**
 * Injects files from the /css and /js folders into the app at run-time.
 * Catches and logs errors to be fault tolerant, so watch the console for errors.
 * @param cssFileName
 */
module.exports = {
    css: function (cssFileName) {
        const cssPath = path.resolve(__dirname, '..', 'css', cssFileName);
        const token = cssFileName.replace('.css', ''); //a unique id for keeping track of the script element we're creating.

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
    },


    script: function (cssFileName) {
        //THIS IS NOT CURRENTLY WORKING...content is loaded, but not evaluated
        console.error('Inject.script() is not functioning');
        return;

        // const cssPath = path.resolve(__dirname, '..', 'js', cssFileName);
        // const token = cssFileName.replace('.js', ''); //a unique id for keeping track of the script element we're creating.
        //
        // try {
        //     fs.readFile(cssPath, (error, data) => {
        //         try {
        //             if (error) {
        //                 console.log('ERROR: Could not find the script file at: ' + cssFileName);
        //             }
        //
        //             let styleBlock = jQuery(`#${token}_js`);
        //
        //             //create the style block if it doesn't exist
        //             //create the style block if it doesn't exist
        //             if (styleBlock.length === 0) {
        //                 styleBlock = jQuery(`<script id="${token}_js"></script>`).appendTo('head')
        //             }
        //
        //             //update the style block with the file contents
        //             styleBlock.text(data.toString());
        //
        //         } catch (e) {
        //             console.error(e);
        //         }
        //     })
        // } catch (e) {
        //     console.error(e);
        // }
    }
}