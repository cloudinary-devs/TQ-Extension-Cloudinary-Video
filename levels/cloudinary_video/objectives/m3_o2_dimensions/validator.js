const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const {forEach} = require("ramda");

module.exports = async function (helper) {

    let wrong=[];
    let correct=[];

    const answers = helper.validationFields;

    //Identify missing answers
    for(let i = 1;i<=10;i++){
        if(!answers.hasOwnProperty('answer'+i)){
            wrong.push(`Answer ${i} is incomplete.`);
        }
    }


    const correctParameters = {
        answer1: '/c_scale,w_150/',
        answer2: '/c_scale,w_150/',
        answer3: '/c_scale,w_150/',
        answer4: '/c_scale,w_150/',
        answer5: '/c_scale,w_150/',
        answer6: '/c_scale,w_150/',
        answer7: '/c_scale,w_150/',
        answer8: '/c_scale,w_150/',
        answer9: '/c_scale,w_150/',
        answer10: '/c_scale,w_150/',
    }

    //Look through submitted answers.
    for(const key in answers){

        //replace leading non-digits with nothing to extract the number
        let number = key.replace(/^\D+/g,'');

        if(answers[key].includes(correctParameters[key])){
            correct.push(`<a href="#q${number}">${key}</a> is correct!`);
        }else{
            wrong.push(`<a href="#q${number}">${key}</a> is incorrect.`);
        }
    }

    if(wrong.length>0){
        return helper.fail("<ul><li>"+correct.join("</li><li>")+"</li></ul><ul><li>"+wrong.join("</li><li>")+"</li></ul>");
    }else{
        return helper.success("<ul><li>"+correct.join("</li><li>")+"</li></ul>");
    }


    //Final test by downloading...
    Promise.all(
        [
            download(highQualityUrl, 'cloudinary_m3_o1_high_quality.mp4'),
            download(lowQualityUrl, 'cloudinary_m3_o1_low_quality.mp4'),
            download(autoQualityUrl, 'cloudinary_m3_o1_auto_quality.mp4')
        ])
        .then((files) => {
            helper.success('Nice Work!');

            //@todo-p2 Change this into a full page layout illustrating the purpose of each transformation
            browser.display(
                `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <h3>High Quality</h3>
                            <video autoplay loop><source src="${highQualityUrl}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Auto Quality</h3>
                            <video autoplay loop><source src="${autoQualityUrl}" type="video/mp4"></video>
                        </div>
                        <div>
                            <h3>Low Quality</h3>
                            <video autoplay loop><source src="${lowQualityUrl}" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
                `
            )
        }).catch((e) => {
        helper.fail(e);
    });

};