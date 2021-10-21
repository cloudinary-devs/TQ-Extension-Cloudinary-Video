const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/q_100/TwilioQuest/Flower.mp4',
            mustAppear: ['q_100/','https:','res.cloudinary.com','video/upload','TwilioQuest','/Flower.mp4']
        },
        answer2: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/q_auto/TwilioQuest/Flower.mp4',
            mustAppear: ['q_auto/','https:','res.cloudinary.com','video/upload','TwilioQuest','/Flower.mp4']
        },
        answer3: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/q_10/TwilioQuest/Flower.mp4',
            mustAppear: ['q_10/','https:','res.cloudinary.com','video/upload','TwilioQuest','/Flower.mp4']
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
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Auto Quality (q_auto) </h3>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Low Quality (q_10) </h3>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer3')}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};