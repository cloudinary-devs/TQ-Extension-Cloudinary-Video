const state = require("../../../../lib/state");

module.exports = async function (helper) {

  state.saveAnswers(helper);

  const howManySDKs = helper.getNormalizedInput('howManySDKs');
  const cloudinaryAcademy = helper.getNormalizedInput('cloudinaryAcademy');

  if(!howManySDKs){
    return helper.fail('Please complete the form and click Hack again.');
  }

  if (parseInt(howManySDKs) < 15 ) {
    return helper.fail(`
      There are even MORE than ${howManySDKs} Framework Integration SDKs!  Check the hint?
    `);
  }

  if (cloudinaryAcademy.toLowerCase() !== 'Cloudinary Academy'.toLowerCase()){
    return helper.fail(`Hmmm, no, that's not the name of the training program... try the hint?`);
  }

  helper.success(`
    Well Done!
  `);
};
