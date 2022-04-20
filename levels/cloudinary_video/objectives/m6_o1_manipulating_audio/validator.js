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
            Nice! You've changed the volumes of the dog videos!
        `);
        browser.display(
            `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <center><h3> 80% lower volume </h3></center>
                            <video loop controls width="250px"><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                        </div>
                        <div>
                            <center><h3> muted volume </h3></center>
                            <video loop controls width="250px"><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};