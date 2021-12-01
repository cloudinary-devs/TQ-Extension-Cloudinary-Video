const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');

module.exports = async function (helper) {

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_150/TwilioQuest/Flower.mp4',
            mustAppear: ['c_scale', 'w_150/']
        },
        answer2: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_fill,w_300,h_300/TwilioQuest/Flower.mp4',
            mustAppear: ['c_fill', 'w_300','h_300']
        },
        answer3: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_crop,h_100,w_350,x_230,y_110/TwilioQuest/Flower.mp4',
            mustAppear: ['c_crop', 'h_100', 'w_350', 'x_230', 'y_110']
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice work! You've figured out how to scale, fill, and crop videos!
        `);
        browser.display(
            `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>Scaled</h3>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Fit</h3>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Cropped</h3>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer3')}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};