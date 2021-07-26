
const assert = require("assert");
const URI = require("urijs");
const browser = require('../../../../lib/browser');

/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {

  // We start by getting the user input from the helper
  const { answer1, answer2 } = helper.validationFields;

  browser.show();
  browser.render(`
    <div>
        <video width="320" height="240" controls>
            <source src="https://res.cloudinary.com/joelsimpson/video/upload/v1627081950/Flower.mp4" type="video/mp4">
        </video>
    </div>
  `);

  helper.fail('testing');

};
