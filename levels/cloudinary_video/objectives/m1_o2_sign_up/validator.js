const cloudinary = require('cloudinary');

module.exports = async function (helper) {

    const {cloudinary_cloud_name, cloudinary_api_key, cloudinary_api_secret} = helper.validationFields;

    cloudinary.config({
        cloud_name: cloudinary_cloud_name,
        api_key: cloudinary_api_key,
        api_secret: cloudinary_api_secret
    });

    console.log(cloudinary.url('sample'));


    //This stores the values into environment variables of 'name'
    helper.success(`Hooray! You did it!`, [
        {name: 'CLOUDINARY_CLOUD_NAME', value: cloudinary_cloud_name},
        {name: 'CLOUDINARY_API_KEY', value: cloudinary_api_key},
        {name: 'CLOUDINARY_API_SECRET', value: cloudinary_api_secret, concealed: true}
    ]);
};
