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

    const worldState = helper.context.levelState['com.cloudinary.video'];


    if (true) {
        helper.success('Nice Work!');
        //@todo-p1 consider autoplay muted controls properties as preferences/options
        browser.display(`
                        <div>
                            <h1>Success!</h1>
                            <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                                <div>
                                    <h3>High Quality</h3>
                                    <video width="250" autoplay><source src="${highQualityUrl}" type="video/mp4"></video>
                                </div>
                                <div>
                                    <h3>Auto Quality</h3>
                                    <video width="250"  autoplay><source src="${autoQualityUrl}" type="video/mp4"></video>
                                </div>
                                <div>
                                    <h3>Low Quality</h3>
                                    <video width="250" autoplay><source src="${lowQualityUrl}" type="video/mp4"></video>
                                </div>
                            </div>
                        </div>`);
        return;
    } else {
        helper.fail("Sorry, that doesn't appear to be the correct asset.");
        //@todo-p1 add reason..description of expected vs received
    }



    // const path = download(url1, 'test.mp4', function () {
    //
    //     //when file is done downloading, check it
    //     ffmpeg.ffprobe(path, function (err, metadata) {
    //         console.log(metadata);
    //
    //         if (err) {
    //             //@todo-p1 add url processing module for typical url issues...try to figure out and explain what's wrong
    //             helper.fail("Sorry, that doesn't seem to be a valid URL");
    //         }
    //
    //         if (true) {
    //             helper.success('Nice Work!');
    //             //@todo-p1 consider autoplay muted controls properties as preferences/options
    //             browser.display(`
    //                     <div>
    //                         <h1>Success!</h1>
    //                         <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
    //                             <div>
    //                                 <h3>High Quality</h3>
    //                                 <video autoplay><source src="${highQualityUrl}" type="video/mp4"></video>
    //                             </div>
    //                             <div>
    //                                 <h3>Auto Quality</h3>
    //                                 <video autoplay><source src="${autoQualityUrl}" type="video/mp4"></video>
    //                             </div>
    //                             <div>
    //                                 <h3>Low Quality</h3>
    //                                 <video autoplay><source src="${lowQualityUrl}" type="video/mp4"></video>
    //                             </div>
    //                         </div>
    //                     </div>`);
    //         } else {
    //             helper.fail("Sorry, that doesn't appear to be the correct asset.");
    //             //@todo-p1 add reason..description of expected vs received
    //         }
    //
    //
    //     });
    //
    // });


};
