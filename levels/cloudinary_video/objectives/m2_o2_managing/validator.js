const Grader = require("../../../../lib/grader");

module.exports = async function (helper) {

    const {answer1} = helper.validationFields;

    /**
     * Some special guidance outside of what the grader will do
     */
    if (!answer1.includes('TwilioQuest')) {
        //@todo-p2 could make this better by inspecting folder specified...ensuring there is a folder, etc
        return helper.fail('Check to make sure that you created the "TwilioQuest" folder and specified it correctly in the url.' + answer1);
    }
    if (!answer1.includes('Flower.mp4')) {
        //@todo-p2 could make this better by inspecting folder specified...ensuring there is a folder, etc
        return helper.fail('Check to make sure that you renamed the file to Flower.');
    }

    /**
     * Now the grader's turn
     * @type {Grader}
     */
    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/joelsimpson/video/upload/v1627081950/TwilioQuest/Flower.mp4',
            mustAppear: ['https:','res.cloudinary.com','video/upload','TwilioQuest','/Flower.mp4']
        }
    }, function pass() {
        //nothing new to show in browser, so just the success message
        helper.success(grader.getSuccessMessage());

    });

    grader.grade();
}