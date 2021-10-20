const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/demo/transition1.mp4',
            mustAppear: ['/demo/transition1.mp4']
        },
        answer2: {
            validExample: `https://res.cloudinary.com/joelsimpson/video/upload/c_fill,h_200,w_300/fl_splice,l_video:demo:kitten_fighting.mp4/c_fill,h_200,w_300/fl_layer_apply/fl_splice,l_video:TwilioQuest:Flower.mp4/c_fill,h_200,w_300/fl_layer_apply/demo/dog.mp4`,
            mustAppear: ['c_fill', 'h_200', 'w_200', 'fl_layer_apply', 'demo/dog.mp4'],
            mustAppearInQuantity: [
                {'c_fill': 2}, {'h_200': 3}, {'w_300': 3}, {'fl_layer_apply': 2}
            ],
            mustAppearInOrder: [
                ['demo:kitten_fighting', 'TwilioQuest:Flower'],
                ['TwilioQuest:Flower', 'demo/dog.mp4']
            ]
        }
    }, function pass() {
        //@todo-p1 We need to add additional processing here because the grader can't address the duplicated segments very effectively
        helper.success(grader.getSuccessMessage());

        const oldVideo = state.getAnswers('m5_o3_combining_clips').value().answer3;

        browser.display(
            `
        <div>
            <h1>Success!</h1>
            <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                <div>
                    <h3>Without Transitions</h3>
                    <video autoplay loop controls><source src="${oldVideo}" type="video/mp4"></video>
                    <h3>With Transitions</h3>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                </div>

            </div>
        </div>
        `
        )
    }, function fail() {
        //@todo-p2 We may need to provide better guidance, this one is more complicated and because the grading system can't handle duplicate parameters, it's relatively ineffective in this case.
    })

    grader.grade();
};