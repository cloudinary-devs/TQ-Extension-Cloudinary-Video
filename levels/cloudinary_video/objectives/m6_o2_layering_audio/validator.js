const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/v1638549969/demo/kitten_fighting.mp4',
            mustAppear: ['demo/kitten_fighting.mp4','https:','res.cloudinary.com','video/upload']
        },
        answer2: {
            validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/l_video:TwilioQuest:dog.wav/fl_layer_apply/v1638549969/demo/kitten_fighting.mp4',
            mustAppear: ['demo/kitten_fighting.mp4','https:','res.cloudinary.com','video/upload','l_video:TwilioQuest:dog.wav','fl_layer_apply'],
            mustAppearInOrder: [
                ['upload', 'l_'],
                ['l_','fl_layer_apply']
            ]
        }        
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice! You've added the dog sound effects on top of the fighting kittens video!
        `);
        browser.display(
            `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <center><h3> original kitten (no audio) </h3></center>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4" width=200></video>
                        </div>
                        <div>
                            <center><h3> kitten with dog sounds </h3></center>
                            <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4" width=200></video>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};