const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');

module.exports = async function (helper) {

    const urlOriginal = helper.getNormalizedInput('urlOriginal');
    const urlScaledDown = helper.getNormalizedInput('urlScaledDown');

    //Parse Check the URL
    if (!urlScaledDown.includes('/upload/c_scale,w_0.5/')) {
        return helper.fail('Carefully check the url to make sure the /c_scale,w_0.5/ is specified correctly and in the proper position following /upload/');
    }

    //Final test by downloading...
    Promise.all(
        [
            download(urlOriginal, 'cloudinary_m2_o3_original.mp4'),
            download(urlScaledDown, 'cloudinary_m2_o3_scaledDown.mp4')
        ])
        .then((filenames) => {
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
            )
        }).catch((e) => {
        helper.fail(e);
    });
};