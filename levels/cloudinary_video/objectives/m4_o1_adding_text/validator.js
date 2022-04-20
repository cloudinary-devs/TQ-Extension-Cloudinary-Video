const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');


module.exports = async function (helper) {

    //Use the advisor to review submitted answers and check them against our key.
    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_400/l_text:roboto_30_bold:@DeloitteNick,g_south_east/v1627081950/TwilioQuest/Flower.mp4',
            mustAppear: ['/c_scale', 'w_400', 'l_text', 'roboto', '30', 'bold', ':@DeloitteNick', 'g_south_east', 'Flower.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_text'],
                ['/l_text', ',g_south_east']
            ]
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Awesome! You've added attribution text to the Flower video using Cloudinary!
        `);
        browser.display(
            `
            <div>
                <h1>Success!</h1>
                <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                    <div>
                        <h3>Attributed!</h3>
                        <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                    </div>

                </div>
            </div>
            `
        );
    });

    grader.grade();
};