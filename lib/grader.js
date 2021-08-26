/**
 *  Responsible for identifying common errors and providing guidance to the student
 *
 *  create base methods that are fairly generic and then add similarly named specific variations and cases.
 *      checkURL(url)
 *      checkURLProperty(url,prop)
 *      checkURLPropertyValue(url,prop,val,spec)
 *  combine/group function sets under ALL
 *      checkURLPropertyALL(url,prop,val)
 *
 */

module.exports = class Grader {

    correct = [];//The list of answers that are fully correct
    wrong = [];//The list of answers that contain a mistake.
    helper;//reference to the validation helper
    answerKey;
    answers;
    correctMessage='';
    problemsMessage='';

    constructor(helper, answerKey) {
        this.helper = helper;
        this.answers = helper.validationFields;
        this.answerKey = answerKey;

        /**
         * Returns true if A and B are appear in the string and appear in order of A then B.
         * @param {string} a
         * @param {string} b
         */
        String.prototype.inOrderOf = function (a, b) {
            return (0 <= this.indexOf(a) && this.indexOf(a) < this.indexOf(b));
        }

        this.checkForMissingAnswers();
        this.applyAnswerKey();
    }

    checkForMissingAnswers() {
        //Identify answers that weren't filled out
        for (let i = 1; i <= Object.keys(this.answerKey).length; i++) {
            if (!this.answers.hasOwnProperty('answer' + i)) {
                this.wrong.push(`Answer ${i} is missing.`);

                //remove the answer key entry so we don't further process this answer
                delete this.answerKey['answer' + i];
            }
        }
    }

    applyAnswerKey() {
        //See if every answer component appears in the answer

        for (const key in this.answers) {

            //replace leading non-digits with nothing to extract the Answer number
            let answerNumber = key.replace(/^\D+/g, '');

            if (!this.answerKey[key].mustAppear.every((param) => this.answers[key].includes(param))) {
                this.wrong.unshift(`Answer ${answerNumber} is missing one or more necessary parameters.`);
                continue //only show one error for an answer at a time
            }

            let wrongOrder = false;
            let self = this;
            this.answerKey[key].mustAppearInOrder.forEach(function(order){
                if (!self.answers[key].inOrderOf(...order)) {
                    self.wrong.unshift(`Answer ${answerNumber}: ${order[0]} must come before ${order[1]}.`);
                    wrongOrder = true;
                }
            });


            if (!wrongOrder) {
                this.correct.push(`Answer ${answerNumber}`);
            }
        }
    }

    passed() {
        this.correctMessage = "<div style='text-align: left;'>" +
            (this.correct.length > 0 ? "Correct:" + Grader.pretty(this.correct) + "</div>"
                : '');

        this.problemsMessage = "<div style='text-align: left;'>Needs Improvement:" + Grader.pretty(this.wrong) + "</div>";

        if (this.wrong.length > 0) {
            this.helper.fail(this.correctMessage + this.problemsMessage);
            return false;
        }
        return true;
    }


    static pretty(list) {
        return "<ul><li>" + list.join("</li><li>") + "</li></ul>";
    }
}