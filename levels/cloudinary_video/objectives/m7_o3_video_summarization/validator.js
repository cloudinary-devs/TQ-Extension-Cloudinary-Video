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

        l = new jslint.LintStream();
        l.write({file: "user_code.js", body: scriptText});
        await l.on('data', function (chunk, encoding, callback) {
          // Check for specific syntax errors, namely closing brackets () {} []
          var userCodeErrors = chunk.linted.errors;
          console.log(userCodeErrors);
          var errorMessage;
          for (var errorEntry in userCodeErrors) { // var _i = 0; _i < length; ++_i
            errorEntry = userCodeErrors[errorEntry];
            errorMessage = `Syntax error: `+errorEntry.reason+` (line `+(18+errorEntry.line)+`)`;
            //console.log(errorEntry);
            //TODO: Combine if statements
            if (errorEntry.code === "expected_a_b_from_c_d") {
              return helper.fail(errorMessage);
            } else if (errorEntry.code === "expected_a_b") {
              return helper.fail(errorMessage);
            } else if (errorEntry.code === "unexpected_char_a" && errorEntry.a !== "(space)") {
              return helper.fail(errorMessage);
            }
          }
          // Script must include certain keywords
          if (!
              (  scriptText.indexOf('var cld = cloudinary.') > 0 
              && scriptText.indexOf('var demoplayer = cld.') > 0
              && scriptText.indexOf('demoplayer.') > 0 )
          ) {
                  helper.fail(`Oops! Did you edit the template code? Make sure the template code (ie. "var cld = cloudinary.[code]") is left in place.`);
              }
          // Width must be 600
          else if (!
              (scriptText.indexOf(').width(600)') > 0)
          ) {
              helper.fail(`The video player's width needs to be 600 pixels! 
              `);
          // Demoplayer must source TwilioQuest/Flower
          } else if (!
              (scriptText.indexOf("TwilioQuest/Flower") > 0 && scriptText.indexOf("demoplayer.source(") > 0)
          ) {
              helper.fail(`Something's not quite right with the demoplayer.source function! Make sure you're using the TwilioQuest/Flower video!
              `);
          // Transformation needs to be defined at least once
          } else if (!
            (scriptText.indexOf("transformation") > 0)
          ) {
              helper.fail(`Make sure you're using at least one transformation by using the {transformation:{ }} argument under demoplayer.source!
              `);
          } else {
              helper.success(`Yay! You embedded a Cloudinary video player on a webpage!`);
              //`+xmlResponseText.getElementById("video-code").text+`
              //`)
          }
        });
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