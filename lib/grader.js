const downloadMgr = require("./download");
const EventEmitter = require('events');
const state = require('./state');
const fs = require("fs");
/**
 *  Responsible for identifying common errors and providing guidance to the student
 *
 *
 */
module.exports = class Grader extends EventEmitter {

    /**
     *  Example answer key - overwritten in constructor
     *  Answers/Fields MUST be named answer{n} in sequential order
     */
    answerGradingKey = {
        answer1: {
            mustAppear: ['c_scale', 'w_400', 'l_twilioquest:cloudinary_icon', 'g_south_west', 'o_50', 'x_10', 'y_10', 'eo_10', 'TwilioQuest/Flower.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_'],
                ['l_', 'x_'],
                ['l_', 'y_'],
                ['l_', 'o_'],
                ['l_', 'eo_'],
            ],
        },
        answer2: {
            mustAppear: ['c_scale', 'w_400', 'l_twilioquest:cloudinary_icon', 'g_south_west', 'o_50', 'x_10', 'y_10', 'eo_10', 'TwilioQuest/Flower.mp4'],
            mustAppearInOrder: [
                ['/c_scale', '/l_'],
                ['l_', 'x_'],
                ['l_', 'y_'],
                ['l_', 'o_'],
                ['l_', 'eo_'],
            ]
        }
    };

    /**
     * The player's answers in property:value structure where the answer MUST be a url
     * @type {{answer3: string, answer2: string, answer4: string, answer1: string}}
     */
    answers = {answer1: 'url1', answer2: 'url2', answer3: 'url3', answer4: 'etc...'};

    /**
     * Uniquely name/scope saved files and state, typically the objective name
     * @type {string}
     */
    objectivePrefix = '';

    /**
     * The list of responses for answers that are fully correct
     * @type {[]}
     */
    correct = [];

    /**
     * The list of responses for answers that contain a mistake.
     * @type {[string]}
     */
    wrong = [];

    /**
     * The filenames of the downloaded files, including complete path
     * @type {[string]}
     */
    downloadedFiles = [];

    /**
     * Local reference to validator helper so that we can get answers and output our response after grading
     */
    helper;

    /**
     * An html formatted message that shows a list of the correct answers after grading
     * @type {string}
     */
    correctMessage = '';

    /**
     * An html formatted message that shows a list of the incorrect/wrong answers after grading
     * @type {string}
     */
    problemsMessage = '';

    /**
     * @todo-p2 need to complete this list by adding missing arguments and documentation links
     * @type {{so_: {docsUrl: string, title: string}, c_scale: {docsUrl: string, title: string}, y_: {docsUrl: string, title: string}, x_: {docsUrl: string, title: string}, w_: {docsUrl: string, title: string}, br_: {docsUrl: string, title: string}, du_: {docsUrl: string, title: string}, o_: {docsUrl: string, title: string}, co_: {docsUrl: string, title: string}, bo_: {docsUrl: string, title: string}, l_: {docsUrl: string, title: string}, eo_: {docsUrl: string, title: string}, c_crop: {docsUrl: string, title: string}, dl_: {docsUrl: string, title: string}, h_: {docsUrl: string, title: string}, g_: {docsUrl: string, title: string}, c_: {docsUrl: string, title: string}, b_: {docsUrl: string, title: string}}}
     */
    actionDescriptions =
        {
            'b_': {
                title: 'background',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#b_background'
            },
            'bo_': {
                title: 'border',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#bo_border'
            },
            'br_': {
                title: 'bitrate',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#br_bitrate'
            },
            'c_': {
                title: 'crop/resize',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#c_crop_resize'
            },
            'c_crop': {
                title: 'crop',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#c_crop'
            },
            'c_scale': {
                title: 'scale',
                docsUrl: 'https://cloudinary.com/documentation/transformation_reference#c_scale'
            },
            'co_': {title: 'color', docsUrl: ''},
            'dl_': {title: 'delay', docsUrl: ''},
            'du_': {title: 'duration', docsUrl: ''},
            'w_': {title: 'width', docsUrl: ''},
            'g_': {title: 'gravity', docsUrl: ''},
            'eo_': {title: 'timing offset end', docsUrl: ''},
            'so_': {title: 'timing offset start', docsUrl: ''},
            'r_': {
                title: 'rounding',
                docsUrl: 'https://cloudinary.com/documentation/video_manipulation_and_delivery#rounding_corners_and_creating_circular_videos'
            },
            'h_': {title: 'height', docsUrl: ''},
            'l_': {title: 'layer', docsUrl: ''},
            'o_': {title: 'opacity', docsUrl: ''},
            'x_': {title: 'x location or offset', docsUrl: ''},
            'y_': {title: 'y location or offset', docsUrl: ''},
        };

    /**
     *
     * @param helper Validation Helper instance
     * @param answerKey
     * @param passCallback This function will be called after grading if all answers are correct.
     * @param failCallback This function will be called after grading if any answer is incorrect.
     */
    constructor(helper, answerKey, passCallback, failCallback) {
        super();

        state.saveAnswers(helper);

        this.helper = helper;
        this.answers = helper.validationFields;
        this.objectivePrefix = helper.context.hackObject.objectiveName + "_";
        this.answerGradingKey = answerKey;

        if (state.getCheatMode()) {
            //use any valid answers provided in the key for any answers that aren't provided by the player
            for (let answer in answerKey) {
                if (this.answers[answer] === undefined || this.answers[answer] === '' && answerKey[answer].validExample !== undefined) {
                    this.answers[answer] = answerKey[answer].validExample;
                }
            }
            helper.validationFields = this.answers;
        }

        //We'll update messages success/failure messages before letting anyone else know about pass/fail
        this.on('pass', () => this.updateMessages());
        this.on('fail', () => this.updateMessages());

        //Attach methods if they were provided
        passCallback !== undefined && this.on('pass', passCallback);
        failCallback !== undefined && this.on('fail', failCallback);

        /**
         * A helper function
         * Returns true if A and B are appear in the string and appear in order of A then B.
         * @param {string} a
         * @param {string} b
         */
        String.prototype.inOrderOf = function (a, b) {
            return (0 <= this.indexOf(a) && this.indexOf(a) < this.indexOf(b));
        }
    }

    /**
     * Grades the player's answers, creates guidance messages, and emits pass or fail events based on player's performance.
     */
    grade() {
        let self = this;

        this.checkForMissingAnswers();

        for (const key in this.answers) {
            if (!this.answerGradingKey[key]) {
                throw `No answer key for ${key}`;
            }
        }

        this.applyAnswerKey();

        if (this.wrong.length > 0) {
            this.helper.fail(this.problemsMessage);
            this.emit('fail', this);
            return;
        }

        this.downloadFiles().then(function (files) {

            let downloadErrors = ''

            //combine the async individual download results
            self.downloadedFiles = files.reduce(
                function (allFiles, file) {
                    if (file !== undefined && file['answer'] !== undefined) {
                        allFiles[file['answer']] = file['filePath'];
                    }else{
                        downloadErrors += '<br>Some files failed to download:'+file;
                    }
                    return allFiles
                }, {}
            );


            state.saveDownloadedFilePaths(self.helper, self.downloadedFiles)

            if (downloadErrors) {
                self.helper.fail(downloadErrors)
                self.emit('fail', this)

            } else {
                self.emit('pass', this)
            }

        });

    }

    /**
     * Download the url answers as a final test and to use in the browser results
     * @returns {Promise<unknown[]>}
     */
    downloadFiles() {

        let grader = this;

        try {

            return Promise.all(
                Object.keys(this.answers).map(function (answer) {

                    return downloadMgr.download(answer, grader.answers[answer], grader.objectivePrefix + answer + '.mp4').catch((e) => {
                        //catching error here so we can add context of which answer
                        const answerFormatted = answer.charAt(0).toUpperCase() + answer.substring(1).replace('swer', 'swer ');
                        grader.helper.fail(`Downloading ${answerFormatted} generated this network error: ${e}`);
                    });

                })
            ).catch((e) => {
                this.helper.fail(e);
            });
        } catch (e) {
            this.helper.fail(e);
        }
    }

    /**
     * Identify answers that weren't filled out and add corrections to the list of wrong answers.
     */
    checkForMissingAnswers() {
        //
        for (let i = 1; i <= Object.keys(this.answerGradingKey).length; i++) {
            if (!this.answers.hasOwnProperty('answer' + i) || this.answers['answer' + i] === '') {
                this.wrong.push(`Answer ${i} is missing.`);

                //remove the answer key entry so we don't further process this answer
                delete this.answerGradingKey['answer' + i];
            }
        }
    }

    /**
     * NOTE:  This function and answer key schema does not currently support answers with multiple occurrences of a
     * pattern, including multiples in the submitted answer (ex. w_150...w_200 when either or both is wrong)
     *
     * @todo check for specified parameters that are extra/not needed
     *
     */
    applyAnswerKey() {

        for (const answerIndex in this.answers) { //answerIndex "answer1","answer2"
            let self = this;

            //replace leading non-digits with nothing to extract the Answer number
            let answerNumber = parseInt(answerIndex.replace(/^\D+/g, ''));

            /**
             * Check for missing components
             */
            if (!this.answerGradingKey[answerIndex].mustAppear.every((param) =>
                this.answers[answerIndex].includes(param) ||
                this.wrong.push(`Answer ${answerNumber}: ` + this.guidance(this.answers[answerIndex], param))
            )) {
                continue //only show one error for an answer at a time
            }

            /**
             * Check for components in wrong order
             * @type {boolean}
             */
            let stopChecking = false;
            const first = 0, second = 1; //for readability
            if (this.answerGradingKey[answerIndex].mustAppearInOrder) {
                this.answerGradingKey[answerIndex].mustAppearInOrder.forEach(function (order) {
                    if (stopChecking) return;//only include one at a time to avoid cascade of all dependant cases

                    //@todo-p3 consider checking existence of these 2 above instead..
                    //Check the first parameters existence just in case it was left out of mustAppear list
                    if (!self.answers[answerIndex].includes(order[first])) {
                        self.wrong.push(`Answer ${answerNumber}: ` + self.guidance(self.answers[answerIndex], order[first]))
                        stopChecking = true;
                    }

                    //Check the second parameters existence just in case it was left out of mustAppear list
                    if (!self.answers[answerIndex].includes(order[second])) {
                        self.wrong.push(`Answer ${answerNumber}: ` + self.guidance(self.answers[answerIndex], order[second]))
                        stopChecking = true;
                    }

                    if (!self.answers[answerIndex].inOrderOf(...order)) { //but
                        self.wrong.push(`Answer ${answerNumber}: ${order[first]} must come before ${order[second]}.`);
                        stopChecking = true;
                    }
                });
            }

            if (self.wrong.length === 0) {
                this.correct.push(`Answer ${answerNumber}`);
            }
        }
    }

    /**
     * Evaluates a parameter that was provided against what was expected and returns a tailored message as guidance.
     * @param actual
     * @param expected
     * @returns {string} Guidance based on what was expected vs what was provided
     */
    guidance(actual, expected) {
        console.log({expected: expected, actual: actual});
        //look for existence of the action
        let action = expected.substring(0, expected.indexOf('_') + 1);
        if (actual.indexOf(action) === -1 || action === '') {

            //return generic guidance if nothing specific is defined
            if (typeof this.actionDescriptions[action] == 'undefined') {
                console.warn(`No entry in guidance for action:${action}`);
                return `Expecting the url to contain '${expected}'.`;
            }

            let name = this.actionDescriptions[action].title;

            //Wrap with a link to documentation if we have a link
            if (typeof this.actionDescriptions[action].docsUrl !== 'undefined' && this.actionDescriptions[action].docsUrl !== '') {
                name = `<a target="_blank" href="${this.actionDescriptions[action].docsUrl}">${name}</a>`;
            }

            return `Needs ${name} parameter (hint: ${action}).`;
        }

        //it does exist, so now see if we can provide a tailored explanation for why it's still wrong
        switch (action) {
            case 'w_':
                const expectedWidth = expected.substring(expected.indexOf('_') + 1);
                return `The width should be ${expectedWidth}`;

            default:
                return `The ${this.actionDescriptions[action].title} parameter isn't quite right, expected {`;

        }
    }

    /**
     * Creates the html correct and problems messages and calls helper.fail() if the player hasn't passed.
     * @returns {boolean}
     */
    updateMessages() {
        const genListHtml = (list) => "<ul><li>" + list.join("</li><li>") + "</li></ul>";

        this.correctMessage = "<div style='text-align: left;'>" +
            (this.correct.length > 0 ? "Correct Answers:" + genListHtml(this.correct) + "</div>"
                : '');

        this.problemsMessage = "<div style='text-align: left;'>Needs Improvement:" + genListHtml(this.wrong) + "</div>";

        if (this.wrong.length > 0) {
            this.helper.fail(this.correctMessage + this.problemsMessage);
            return false;
        }
        return true;
    }

    getSuccessMessage() {
        return this.correctMessage;
    }

    /**
     * Returns a local url pointing to the the downloaded file if it exists or the submitted url if it exists or false
     * @param answerIndex "answer1", "answer2", etc
     * @returns string|false
     */
    getVideoUrl(answerIndex) {
        const filePath = this.downloadedFiles[answerIndex];
        if (fs.existsSync(filePath)) {
            console.log('cached file exists, using local path');
            return 'file://' + filePath;
        } else if (answerIndex in this.answers) {
            console.warn('cached file does not exist, using answer url to re-request file.');
            return this.answers[answerIndex];
        } else {
            return false;
        }

    }
}
