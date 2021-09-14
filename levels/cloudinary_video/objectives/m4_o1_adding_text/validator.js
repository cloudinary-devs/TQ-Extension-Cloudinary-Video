const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const Grader = require('../../../../lib/grader');


module.exports = async function (helper) {
    const tag = 'cloudinary_m4_o1_';

    const answers = helper.validationFields;

    //Use the advisor to review submitted answers and check them against our key.
    let grade = new Grader(helper, {
        answer1: {
            //https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_400/l_text:roboto_30_bold:@DeloitteNick,g_south_east/v1627081950/TwilioQuest/Flower.mp4
            mustAppear: ['/c_scale', 'w_400', 'l_text', 'roboto', '30', 'bold', ':@DeloitteNick', 'g_south_east', 'Flower.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_text']
            ]
        }
    });

    if (grade.failed()) return;

    //Final test by downloading...
    Promise.all(
        [
            download(answers['answer1'], tag + 'answer1.mp4'),

        ])
        .then((filenames) => {

            browser.display(
                `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>Attributed!</h3>
                            <video autoplay loop><source src="file://${filenames[0]}" type="video/mp4"></video>
                        </div>

                    </div>
                </div>
                `
            )

            return helper.success(grade.correctMessage);

        }).catch((e) => {
        helper.fail(e);
    });

};