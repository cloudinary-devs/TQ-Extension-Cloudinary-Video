const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');
//const validate = require('validate.js');
const jslint = require('jslint');
const { isUndefined } = require('lodash');


module.exports = async function (helper) {
    state.saveAnswers(helper);

    const { serverUrl } = helper.validationFields;

    if (!serverUrl) {
        return helper.fail(
          `Oops! You didn't provide a URL for an application we can validate.`
        );
      }

    try {
        const response = await fetch(serverUrl);
        const responseText = await response.text();
        //const lcaseBody = responseText.toLowerCase();

        const parser = new DOMParser();
        var xmlResponseText = parser.parseFromString(responseText, "text/html");
        var scriptText = xmlResponseText.getElementById("video-code").text;
        var videoTag = xmlResponseText.getElementById("tq-player");
        console.log(videoTag);
        //var textDataCldTransformation = videoTag.getAttribute("data-cld-transformation");
        try {
          var videoTagId = videoTag.getAttribute("id"); // Should be "tq-player"
          var videoTagControl = videoTag.getAttribute("controls"); // Should be ""
          var videoTagClass = videoTag.getAttribute("class"); // "cld-video-player"
          var videoTagSource = videoTag.getAttribute("data-cld-source"); // Has public id, title, subtitle, description
          var videoTagTransformation = videoTag.getAttribute("data-cld-transformation"); // Has transformation info
        } catch (e) {
          return helper.fail(`
            Something went wrong with grabbing the video tag attribute names. Did you modify them on accident?
          `);
        }
        //return helper.fail();
        console.log(videoTagTransformation);
        // When checking the code, only check for editable mistakes, 
        if (!(
          (videoTagId.indexOf("tq-player") >= 0) && 
          (videoTagControl !== null) && 
          (videoTagClass.indexOf("cld-video-player") >= 0)
        )) {
          return helper.fail(`
            Make sure to not modify the id, controls, and class parameters in the template!
          `);
        } else if (
          videoTagSource.indexOf("TwilioQuest/Flower") < 0
        ) {
          return helper.fail(`
            Make sure to use the Flower video in your TwilioQuest folder! Did you put it as the value for the public-id parameter?
          `)
        } else if (!(
          (videoTagSource.indexOf("info") >= 0) && 
          (videoTagSource.indexOf("title") >= 0) && 
          (videoTagSource.indexOf("subtitle") >= 0) && 
          (videoTagSource.indexOf("description") >= 0)
        )) {
          return helper.fail(`
            Please leave the "info", "title", "subtitle", and "description" parameter names alone! Maybe try filling in the values instead?
          `);
        } else if (
          (videoTagSource.indexOf("[description]") >= 0) || 
          (videoTagSource.indexOf("[title]") >= 0) || 
          (videoTagSource.indexOf("[subtitle]") >= 0)
        ) {
          return helper.fail(`
            Please fill in the title, subtitle, and description parameters!
          `);
        } else if (!(
          (videoTagTransformation.indexOf("crop") >= 0) && 
          (videoTagTransformation.indexOf("fill") >= 0) && 
          (videoTagTransformation.indexOf("width") >= 0) && 
          (videoTagTransformation.indexOf("300") >= 0) && 
          (videoTagTransformation.indexOf("height") >= 0)
        )) {
          return helper.fail(`
            Something's not quite right with your crop, width, and height parameters. Try again!
          `);
        } else if (scriptText.indexOf("[") >= 0 || scriptText.indexOf("]") >= 0 ){
          return helper.fail(`
          Don't forget to add your cloud name to the cld variable in the script at the bottom! 
        `);
        } else { 
            helper.success(`You did it! You made a transformed Flower video play in the Cloudinary Video Player!
            And it even has a title, subtitle, and description!`);
        }
      
      } catch (e) {
        console.log(e);
        helper.fail(`
          We couldn't verify your server is working as we expect. Double-check the 
          URL and try again.
          `+String(e)+`
        `);
      }

    /*let grader = new Grader(helper, {
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice!
        `);
        //browser.display(
        //    ` 
        //    `
        //);
    });*/

    //grader.grade();

};