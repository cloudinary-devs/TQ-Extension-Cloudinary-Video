const state = require("../../../../lib/state");

module.exports = async function (helper) {

  state.saveAnswers(helper);

  const howManySDKs = helper.getNormalizedInput('howManySDKs');
  const cloudinaryAcademy = helper.getNormalizedInput('cloudinaryAcademy');

  if(!howManySDKs){
    return helper.fail('Please make sure that you complete the form first, then click HACK again.');
  }

  if (parseInt(howManySDKs) < 15 ) {
    return helper.fail(`
      There are even MORE than ${howManySDKs} Framework Integration SDKs!  Check the hint and try again.
    `);
  }

  if (parseInt(howManySDKs) > 15 ) {
    return helper.fail(`
      There are less than ${howManySDKs} Framework Integration SDKs. Check the hint and try again.
    `);
  }

  if (cloudinaryAcademy.toLowerCase() !== 'Cloudinary Academy'.toLowerCase()){
    return helper.fail(`Hmmm, no, that's not the name of the training program. Check the hint and try again.`);
  }

  helper.success(`
    Well done! You now know more about Cloudinary's SDKs, documentation, training program, and community resources!
  `);
};
