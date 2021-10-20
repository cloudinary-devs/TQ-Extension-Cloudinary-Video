const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');

module.exports = async function (helper) {

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_400/l_twilioquest:cloudinary_icon,g_south_west,o_50,x_10,y_10,eo_10/TwilioQuest/Flower.mp4',
            mustAppear: ['c_scale', 'w_400', 'l_twilioquest:cloudinary_icon', 'g_south_west', 'o_50', 'x_10', 'y_10', 'eo_10', 'TwilioQuest/Flower.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_'],
                ['l_', 'x_'],
                ['l_', 'y_'],
                ['l_', 'o_'],
                ['l_', 'eo_'],
            ]
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage());
        browser.display(
            `
            <div>
                <h1>Success!</h1>
                <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                    <div>
                        <h3>Video with Icon!</h3>
                        <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                    </div>

                </div>
            </div>
            `
        )
    });


    grader.grade();
};