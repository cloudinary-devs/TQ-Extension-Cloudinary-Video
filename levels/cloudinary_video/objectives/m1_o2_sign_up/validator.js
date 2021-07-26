const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
const cloudinary = require('cloudinary');
const browser = require('../../../../lib/browser');

module.exports = async function (helper) {

    try {
        const {cloudinary_cloud_name, cloudinary_api_key, cloudinary_api_secret} = helper.validationFields;

        cloudinary.config({
            cloud_name: cloudinary_cloud_name,
            api_key: cloudinary_api_key,
            api_secret: cloudinary_api_secret
        });

        http.get(cloudinary.url('sample'));
        browser.show();
        browser.render(`
        <div style="width:100%;text-align: center;">
            <h1>Pulling a sample image from your account.</h1>
            <img src="${cloudinary.url('sample')}" alt="sample image">
        </div>
    `);


        //This stores the values into environment variables of 'name'
        helper.success(`Hooray! You did it!`, [
            {name: 'CLOUDINARY_CLOUD_NAME', value: cloudinary_cloud_name},
            {name: 'CLOUDINARY_API_KEY', value: cloudinary_api_key},
            {name: 'CLOUDINARY_API_SECRET', value: cloudinary_api_secret, concealed: true}
        ]);
    }catch(e){
        console.error(e);
    }
};
