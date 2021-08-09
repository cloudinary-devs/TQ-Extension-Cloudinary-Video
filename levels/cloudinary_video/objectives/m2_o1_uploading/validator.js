const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const ffmpeg = require('fluent-ffmpeg');
const advice = require('../../../../lib/commonErrorsAdvisor');

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {

    // We start by getting the user input from the helper
    const url1 = helper.getNormalizedInput('url1');

    if (!url1) {
        helper.fail("Please complete the form.");
    }

    try {
        const path = download(url1, 'cloudinary_m2_o1_temp.mp4',
            function (message) {
                //when file is done downloading, check it
                ffmpeg.ffprobe(path, function (err, metadata) {
                    console.log(metadata);

                    if (err) {
                        helper.fail("Sorry, that doesn't seem to be a valid URL<br>".advice.checkURL(url1).pretty());
                    }

                    if (metadata.format.size === 676502 && metadata.streams[0].coded_height === 368 && metadata.streams[0].coded_width === 640) {


                        helper.success('Nice Work!');
                        browser.display(`<div><h1>Success!</h1><video width="320" height="240" autoplay loop><source src="${url1}" type="video/mp4"></video></div>`);
                    } else {
                        helper.fail("Sorry, that doesn't appear to be the correct asset.");
                    }

                });

            },
            function (failMessage) {
                helper.fail(failMessage)
            }
        );
    } catch (e) {
        console.log(e);
        helper.fail('Uh oh, an unanticipated error occurred.');
    }

};
