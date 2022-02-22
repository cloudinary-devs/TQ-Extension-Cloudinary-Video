const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');
//const validate = require('validate.js');
const jslint = require('jslint');


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

        l = new jslint.LintStream();
        l.write({file: "user_code.js", body: scriptText});
        await l.on('data', function (chunk, encoding, callback) {
          //TODO: Only check for failed closures of brackets.
          //      Otherwise, use the rest of the conditionals to check if the template is in place
          //      and that key tokens are there.
          if (chunk.linted.errors.length > 0) {
            console.log(chunk.linted.errors);
            return helper.fail(`fail`);
          }
        })
        if (!
            (  scriptText.indexOf('var cld = cloudinary.') > 0 
            && scriptText.indexOf('var demoplayer = cld.') > 0
            && scriptText.indexOf('demoplayer.') > 0 )
        ) {
                helper.fail(`Oops! Did you edit the template code? Make sure the template code (ie. "var cld = cloudinary.[code]") is left in place.`);
            }
        else if (!
            (scriptText.indexOf(').width(600)') > 0)
        ) {
            helper.fail(`The video player's width needs to be 600 pixels! 
            `);
        } else if (!
            (scriptText.indexOf("TwilioQuest/Flower") > 0 && scriptText.indexOf("demoplayer.source(") > 0)
        ) {
            helper.fail(`Something's not quite right with the demoplayer.source function! Make sure you're using the TwilioQuest/Flower video!
            `);
        } else if (!
          (scriptText.indexOf("transformation:") > 0)
        ) {
            helper.fail(`Make sure you're using at least one transformation by using the {transformation:{ }} argument under demoplayer.source!
            `);
        } else {
            helper.success(`
            `+xmlResponseText.getElementById("video-code").text+`
            `)
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