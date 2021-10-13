const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
/**
 * @todo-p2 consider using new method to populate old url from prior answer
 * @param helper
 * @returns {Promise<void>}
 */
module.exports = async function (helper) {

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/v1627081950/TwilioQuest/Flower.mp4',
            mustAppear: ['https:','res.cloudinary.com','video/upload','TwilioQuest','/Flower.mp4']
        },
        answer2: {
            validExample: '',
            mustAppear: ['c_scale', 'w_0.5', '/c_scale,w_0.5/']
        }
    }, function pass() {
        helper.success(grader.getSuccessMessage());
        browser.display(`
        <div>
            <h1>Success!</h1>
            <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                <div>
                    <h3>Original</h3>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer1')}" type="video/mp4"></video>
                </div>
                <div>
                    <h3>Half Size</h3>
                    <video autoplay loop controls><source src="${grader.getVideoUrl('answer2')}" type="video/mp4"></video>
                </div>
            </div>
        </div>
        `)
    })

    grader.grade();
};
