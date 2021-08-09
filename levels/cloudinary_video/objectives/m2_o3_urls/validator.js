const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const ffmpeg = require('fluent-ffmpeg');

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {

    const urlOriginal = helper.getNormalizedInput('urlOriginal');
    const urlScaledDown = helper.getNormalizedInput('urlScaledDown');

    if (!urlScaledDown.includes('/upload/c_scale,w_0.5/')) {
        helper.fail('Carefully check the url to make sure the /c_scale,w_0.5/ is specified correctly and in the proper position following /upload/');
    }

    const original = download(urlOriginal, 'cloudinary_m2_o3_original.mp4',()=>null ,(e) => helper.fail(e));
    const scaledDown = download(urlScaledDown, 'cloudinary_m2_o3_scaledDown.mp4',()=>null,(e) => helper.fail(e));

    helper.success('Nice Work!');

    browser.display(
        `
        <h1>Success!</h1>
        <div>
        <h3>Original</h3>
            <video autoplay loop><source src="${urlOriginal}" type="video/mp4"></video>
        </div>
        <div>
        <h3>Half Size</h3>
            <video autoplay loop><source src="${urlScaledDown}" type="video/mp4"></video>
        </div>
        `
    );


};
