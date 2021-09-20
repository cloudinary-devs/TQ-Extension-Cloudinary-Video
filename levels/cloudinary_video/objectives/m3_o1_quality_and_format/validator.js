const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/q_100/TwilioQuest/Flower.mp4',
            mustAppear: ['q_100']
        },
        answer2: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/c_auto/TwilioQuest/Flower.mp4',
            mustAppear: ['q_auto']
        },
        answer3: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/q_10/TwilioQuest/Flower.mp4',
            mustAppear: ['q_10']
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage());
        browser.display(
            `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>High Quality (q_100) </h3>
                            <video autoplay loop><source src="file://${grader.downloadedFiles[0]}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Auto Quality (q_auto) </h3>
                            <video autoplay loop><source src="file://${grader.downloadedFiles[1]}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Low Quality (q_10) </h3>
                            <video autoplay loop><source src="file://${grader.downloadedFiles[2]}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};