/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const assert = require("assert");
const R = require("ramda");
const { isTwilio } = require("../lib/example_helper");
const URI = require("urijs");

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
  const howManySDKs = helper.getNormalizedInput('howManySDKs');
  const cloudinaryAcademy = helper.getNormalizedInput('cloudinaryAcademy');


  if(!howManySDKs){
    return helper.fail('Please complete the form and click Hack again.');
  }

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  if (parseInt(howManySDKs) < 15 ) {
    return helper.fail(`
      There are even MORE than ${howManySDKs} Framework Integration SDKs!  Check the hint?
    `);
  }

  if (cloudinaryAcademy.toLowerCase() !== 'Cloudinary Academy'.toLowerCase()){
    return helper.fail(`Hmmm, no, that's not the name of the training program... try the hint?`);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(`
    Well Done!
  `);
};
