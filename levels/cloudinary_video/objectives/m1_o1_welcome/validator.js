
module.exports = async function (helper) {

  const { firstName } = helper.validationFields;

  console.table(helper.validationFields);

  if(!firstName || firstName === ''){
    console.log('failing');
    return helper.fail('Please agree to continue!');
  }

  return helper.success(`
    Hooray! Thank you ${helper.context.settings.name} signed '${firstName}' for agreeing to help!
  `,[]);

  //@todo-p2 grant Cloudinary staff badge?
};
