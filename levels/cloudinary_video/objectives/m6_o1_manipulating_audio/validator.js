const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/e_volume:-80/v1638549970/demo/dog.mp4',
            mustAppear: ['demo/dog.mp4','https:','res.cloudinary.com','video/upload','e_volume:-80'],
            mustAppearInOrder: [
                ['upload', 'e_volume:-80'],
                ['e_volume:-80','demo']
            ]
        },
        answer2: {
            validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/e_volume:mute/v1638549970/demo/dog.mp4',
            mustAppear: ['demo/dog.mp4','https:','res.cloudinary.com','video/upload','e_volume:mute'],
            mustAppearInOrder: [
                ['upload', 'e_volume:mute'],
                ['e_volume:mute','demo']
            ]
        }        
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice! You've generated nice flower videos with different video qualities!
        `);
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
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};