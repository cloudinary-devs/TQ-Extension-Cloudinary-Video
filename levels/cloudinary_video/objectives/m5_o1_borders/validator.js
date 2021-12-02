const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');

module.exports = async function (helper) {

    /**
     * Incremental Tests
     * https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_200,r_40,b_rgb:1f243c/v1627081950/TwilioQuest/Flower.mp4
     */

    let grader = new Grader(helper, {
        answer1: {//rounded corners
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_200,r_40,b_rgb:1f243c/TwilioQuest/Flower.mp4',
            mustAppear: ['c_scale', 'w_200', 'r_40', 'b_rgb:1f243c', 'TwilioQuest/Flower.mp4']
        },
        answer2: {//ellipse
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_200,r_max,b_rgb:1f243c/TwilioQuest/Flower.mp4',
            mustAppear: ['c_scale', 'w_200', 'r_max', 'b_rgb:1f243c', 'TwilioQuest/Flower.mp4']
        },
        answer3: {//circle
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_scale,w_100,h_100,r_max,b_rgb:1f243c/TwilioQuest/Flower.mp4',
            mustAppear: ['c_scale', 'w_100', 'h_100', 'r_max', 'b_rgb:1f243c', 'TwilioQuest/Flower.mp4']
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
        Nice! You added borders to the Flower video using Cloudinary!
        `);
        browser.display(
            `
        <div>
            <h1>Success!</h1>
            <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                <div>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer3')}" type="video/mp4"></video>
                </div>
            </div>
        </div>
        `
        );
    });

    grader.grade();
};

