const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');

module.exports = async function (helper) {

    let grader = new Grader(helper, {
        answer1: {
            validExample: `https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_400/l_video:TwilioQuest:Flower,c_fill,w_150,r_max,x_10,y_10,g_south_west,eo_10/samples/sea-turtle.mp4`,
            mustAppear: ['c_scale', 'w_400', 'l_video:TwilioQuest:Flower', 'c_fill', 'w_150', 'r_max', 'x_10', 'y_10', 'g_south_west', 'eo_10', '/samples/sea-turtle.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_'],
                ['/c_scale', 'w_'],
                ['w_', '/l_'],
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
                    <h3>Picture in Picture Video</h3>
                    <video autoplay loop><source src="file://${grader.downloadedFiles[0]}" type="video/mp4"></video>
                </div>

            </div>
        </div>
        `
        )
    }, function fail() {
        //nothing special needed, grade with call helper.fail() with appropriate messaging
    })


    grader.grade();
};