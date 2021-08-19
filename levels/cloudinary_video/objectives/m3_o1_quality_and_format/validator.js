const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');

module.exports = async function (helper) {

    const highQualityUrl = helper.getNormalizedInput('highQualityUrl');
    const lowQualityUrl = helper.getNormalizedInput('lowQualityUrl');
    const autoQualityUrl = helper.getNormalizedInput('autoQualityUrl');

    //Parse Check the URLs
    if (!highQualityUrl.includes('/upload/q_100/')) {
        return helper.fail('Carefully check the Hiqh Quality Url.');
    }

    if (!lowQualityUrl.includes('/upload/q_10/')) {
        return helper.fail('Carefully check the Low Quality Url.');
    }

    if (!autoQualityUrl.includes('/upload/q_auto/')) {
        return helper.fail('Carefully check the Auto Quality Url.');
    }


    //Final test by downloading...
    Promise.all(
        [
            download(highQualityUrl, 'cloudinary_m3_o1_high_quality.mp4'),
            download(lowQualityUrl, 'cloudinary_m3_o1_low_quality.mp4'),
            download(autoQualityUrl, 'cloudinary_m3_o1_auto_quality.mp4')
        ])
        .then((filenames) => {
            helper.success('Nice Work!');

            browser.display(
                `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>High Quality (q_100) </h3>
                            <video autoplay loop><source src="${highQualityUrl}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Auto Quality (q_auto) </h3>
                            <video autoplay loop><source src="${autoQualityUrl}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Low Quality (q_10) </h3>
                            <video autoplay loop><source src="${lowQualityUrl}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
            )
        }).catch((e) => {
        helper.fail(e);
    });

};