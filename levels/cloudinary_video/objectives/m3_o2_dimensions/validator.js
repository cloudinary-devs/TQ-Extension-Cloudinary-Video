const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');

module.exports = async function (helper) {
    const tag = 'cloudinary_m3_o2_';

    const correctParameters = {
        answer1: ['c_scale','w_150'],
        answer2: ['c_fill','w_150'],
        answer3: ['c_crop','h_100','w_350','x_230','y_110']
    }

    let wrong = [];
    let correct = [];

    const answers = helper.validationFields;

    //Identify missing answers
    for (let i = 1; i <= Object.keys(correctParameters).length; i++) {
        if (!answers.hasOwnProperty('answer' + i)) {
            wrong.push(`<a href="#q${i}">Answer ${i}</a> is incomplete.`);
        }
    }

    //Look through submitted answers.
    for (const key in answers) {

        //replace leading non-digits with nothing to extract the Answer number
        let answerNumber = key.replace(/^\D+/g, '');

        if (correctParameters[key].every((param)=>answers[key].includes(param))) {
            correct.push(`Answer ${answerNumber}`);
        } else {
            wrong.unshift(`<a href="#q${answerNumber}">Answer ${answerNumber}</a>`);
        }
    }

    const correctMessage = "<div style='text-align: left;'>" + (correct.length >0?"Perfect:<ul><li>" + correct.join("</li><li>") + "</li></ul></div>":'');
    const problemsMessage = "<div style='text-align: left;'>Needs Improvement:<ul><li>" + wrong.join("</li><li>") + "</li></ul></div>";

    if (wrong.length > 0) {
        return helper.fail(correctMessage+problemsMessage);
    }

    //Final test by downloading...
    Promise.all(
        [
            download(answers['answer1'], tag + 'answer1.mp4'),
            download(answers['answer2'], tag + 'answer2.mp4'),
            download(answers['answer3'], tag + 'answer3.mp4'),

        ])
        .then((filenames) => {

            //@todo-p2 Change this into a full page layout illustrating the purpose of each transformation
            browser.display(
                `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>Scaled</h3>
                            <video autoplay loop><source src="${answers['answer1']}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Fit</h3>
                            <video autoplay loop><source src="${answers['answer2']}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Cropped</h3>
                            <video autoplay loop><source src="${answers['answer3']}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
            )

            return helper.success(correctMessage);
        }).catch((e) => {
        helper.fail(e);
    });

};