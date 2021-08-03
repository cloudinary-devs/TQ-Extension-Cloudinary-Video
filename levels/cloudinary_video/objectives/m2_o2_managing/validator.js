const browser = require('../../../../lib/browser');
const download = require('../../../../lib/download');
const ffmpeg = require('fluent-ffmpeg');

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {

    helper.success('validation not implemented yet');
    //@todo-p1 replace following with correct implementation for this objective

    // We start by getting the user input from the helper
    const {url1} = helper.validationFields;


    const path = download(url1, 'test.mp4', function () {

        //when file is done downloading, check it
        ffmpeg.ffprobe(path, function (err, metadata) {
            console.log(metadata);

            if(err){
                //@todo-p1 add url processing module for typical url issues...try to figure out and explain what's wrong
                helper.fail("Sorry, that doesn't seem to be a valid URL");
            }

            if(metadata.format.size===676502 && metadata.streams[0].coded_height===368 && metadata.streams[0].coded_width===640){
                helper.success('Nice Work!');
                //@todo-p1 consider autoplay muted controls properties as preferences/options
                browser.display(`<div><h1>Success!</h1><video width="320" height="240" autoplay><source src="${url1}" type="video/mp4"></video></div>`);
            }else{
                helper.fail("Sorry, that doesn't appear to be the correct asset.");
                //@todo-p1 add reason..description of expected vs received
            }


        });

    });


};
