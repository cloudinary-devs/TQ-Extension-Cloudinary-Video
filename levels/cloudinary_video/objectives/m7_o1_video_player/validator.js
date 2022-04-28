const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');
//const validate = require('validate.js');
//const jslint = require('jslint');
//const { isUndefined, isSet } = require('lodash');


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
        var iframeElement = xmlResponseText.getElementsByTagName("iframe")[0];

        if (iframeElement.width !== "600") {
          return helper.fail(
            `The width of the video player should be 600 pixels wide. Set it in the Player Size section under the Customization tab!`
          );
        }

        if (iframeElement.src.indexOf("https://player.cloudinary.com/embed/") < 0) {
          return helper.fail(
            `Expected the iframe src parameter to include 
            "https://player.cloudinary.com
            /embed/"`
          );
        }

        if (iframeElement.src.indexOf("public_id=TwilioQuest%2FFlower&cloud_name=") < 0) {
          return helper.fail(
            `Expected the iframe src parameter to include the Flower video. Did you set your cloud name and flower video correctly?`
          );
        }

        if (iframeElement.src.indexOf("player%5Bwidth%5D=600") < 0) {
          return helper.fail(
            `Expected the iframe src parameter to include "player%5Bwidth%5D=600" and the other default URL parameters.`
          );
        }

        return helper.success("You did it! You played the Flower video in an embedded Cloudinary video player!");
      } catch (e) {
        console.log(e);
        helper.fail(`
          We couldn't verify your server is working as we expect. Double-check the 
          URL and try again.
          `+String(e)+`
        `);
      }
};