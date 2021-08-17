const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');

module.exports = async function (helper) {

    // We start by getting the user input from the helper
    const url1 = helper.getNormalizedInput('url1');

    if (!url1) {
        helper.fail("Please complete the form.");
    }

    download(url1, 'cloudinary_m2_o1_temp.mp4')
        .then(
            (filename) => {
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