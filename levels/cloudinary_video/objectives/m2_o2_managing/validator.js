const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const ffmpeg = require('fluent-ffmpeg');


module.exports = async function (helper) {

    // We start by getting the user input from the helper
    const {url1} = helper.validationFields;

    if(!url1.includes('TwilioQuest')){
        //@todo-p2 could make this better by inspecting folder specified...ensuring there is a folder, etc
        return helper.fail('Check to make sure that you created the TwilioQuest folder correctly.'+url1);
    }

    if(!url1.includes('Flower.mp4')){
        //@todo-p2 could make this better by inspecting folder specified...ensuring there is a folder, etc
        return helper.fail('Check to make sure that you renamed the file to Flower.');
    }

    const original = download(url1, 'cloudinary_m2_o2_renamed.mp4',()=>helper.success('Well done!') ,(e) => helper.fail(e));

};
