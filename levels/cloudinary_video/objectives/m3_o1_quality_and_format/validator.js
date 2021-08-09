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

    const highQualityUrl = helper.getNormalizedInput('highQualityUrl');
    const lowQualityUrl = helper.getNormalizedInput('lowQualityUrl');
    const autoQualityUrl = helper.getNormalizedInput('autoQualityUrl');


    if (!highQualityUrl.includes('/upload/q_100/TwilioQuest')) {
        return helper.fail('Carefully check the Hiqh Quality Url.');
    }

    if (!lowQualityUrl.includes('/upload/q_10/TwilioQuest')) {
        return helper.fail('Carefully check the Low Quality Url.');
    }

    if (!autoQualityUrl.includes('/upload/q_auto/TwilioQuest')) {
        return helper.fail('Carefully check the Auto Quality Url.');
    }

    download(highQualityUrl, 'cloudinary_m3_o1_high_quality.mp4',
        function(){
            download(lowQualityUrl, 'cloudinary_m3_o1_low_quality.mp4',function(){
                download(autoQualityUrl, 'cloudinary_m3_o1_auto_quality.mp4',function(){
                    helper.success('Nice Work!');
                    browser.display(
                        `
            <div>
                <h1>Success!</h1>
                <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                    <div>
                        <h3>High Quality</h3>
                        <video width="250" autoplay loop><source src="${highQualityUrl}" type="video/mp4"></video>
                    </div>
                    <div>
                        <h3>Auto Quality</h3>
                        <video width="250"  autoplay loop><source src="${autoQualityUrl}" type="video/mp4"></video>
                    </div>
                    <div>
                        <h3>Low Quality</h3>
                        <video width="250" autoplay loop><source src="${lowQualityUrl}" type="video/mp4"></video>
                    </div>
                </div>
            </div>
        `
                    );
                } ,(e) => helper.fail(e));
            },(e) => helper.fail(e));
        },(e) => helper.fail(e));

};
