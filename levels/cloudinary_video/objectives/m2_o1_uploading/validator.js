const browser = require('../../../../lib/browser');
const Grader = require("../../../../lib/grader");

module.exports = async function (helper) {
    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/v1629234800/Succulent_-_14467_bowbw5.mp4',
            mustAppear: ['https:','res.cloudinary.com','video/upload','Succulent_-_14467','.mp4']
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            <br>You did it! You uploaded a video to the Media Library on your Cloudinary account!
        `);
        browser.display(`
            <div>
                <h1>Success!</h1>
                <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                    <div>
                        <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                    </div>
                </div>
            </div>
        `
        )
    });

    grader.grade();
}