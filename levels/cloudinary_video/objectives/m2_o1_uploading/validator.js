const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const ffmpeg = require('fluent-ffmpeg');

module.exports = async function (helper) {

    // We start by getting the user input from the helper
    const url1 = helper.getNormalizedInput('url1');

    if (!url1) {
        helper.fail("Please complete the form.");
    }

    download(url1, 'cloudinary_m2_o1_temp.mp4')
        .then(
            (filename) => {
                console.log(filename);
                //Check the downloaded file to see if it looks like the right file
                ffmpeg.ffprobe(filename, function (err, metadata) {
                    if(err){
                        console.log(err);
                        helper.fail("Sorry, an error occurred"+err);
                    }
                    console.log(metadata);
                    if (
                        metadata.streams[0].coded_height === 368 &&
                        metadata.streams[0].coded_width === 640
                    ) {
                        helper.success('Nice Work!');
                        browser.display(`
                            <div>
                                <h1>Success!</h1>
                                <video autoplay loop>
                                    <source src="${url1}" type="video/mp4">
                                </video>
                            </div>`
                        );
                    } else {
                        //@todo-p2 customize message on why it doesn't appear to be correct
                        helper.fail("Sorry, that doesn't appear to be the correct asset.");
                    }
                });
            }
        )
        .catch((e) => {
            helper.fail(e);
        });

};