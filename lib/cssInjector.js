const path = require('path');
const fs = require('fs');

module.exports = function (cssFileName) {
    const token = cssFileName.replace('.css',''); //a unique id for keeping track of the script element we're creating.
    const cssPath = path.resolve(__dirname, '..', 'css', cssFileName);

    //Remove any old script element that might exist already..necessary during mid development refreshes
    jQuery(`script#${token}_css`).remove();

    fs.readFile(cssPath, (error, data) => {
        if (error) {
            console.log('ERROR: Could not find the css file at: ' + cssFileName);
        }
        jQuery(`<style id="${token}_css"></style>`).appendTo('head').html(data.toString());
    })
}