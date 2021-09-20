const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const state = require('../../../../lib/state');
const fs = require('fs');

module.exports = async function (helper) {
    state.saveAnswers(helper);
    // We start by getting the user input from the helper
    const url1 = helper.getNormalizedInput('url1');

    if (!url1) {
        helper.fail("Please complete the form.");
    }

    download(url1, 'cloudinary_m2_o1_temp.mp4')
        .then(
            (filename) => {
                //@todo validate file size
                const fileSize = fs.statSync(filename).size;
                const expectedFileSize = 676502;
                if(fileSize !== expectedFileSize){
                    return helper.fail(`This doesn't appear to be the correct file.  It should be ${expectedFileSize} bytes, but is ${fileSize} bytes. You should go back through the steps make sure you download the correct (smallest) version.`);
                }

                helper.success('Nice Work!');
                browser.display(`
                    <div>
                        <h1>Success!</h1>
                        <video autoplay loop>
                            <source src="${url1}" type="video/mp4">
                        </video>
                    </div>`
                );
            }
        )
        .catch((e) => {
            helper.fail(e);
        });
};