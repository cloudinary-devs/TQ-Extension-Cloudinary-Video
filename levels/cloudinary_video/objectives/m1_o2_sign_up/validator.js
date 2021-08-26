const http = require('http'); // or 'https' for https:// URLs
const cloudinary = require('cloudinary');
const browser = require('../../../../lib/browser');

module.exports = async function (helper) {

    try {

        const cloudinary_cloud_name = helper.getNormalizedInput('cloudinary_cloud_name');
        const cloudinary_api_key = helper.getNormalizedInput('cloudinary_api_key');
        const cloudinary_api_secret = helper.getNormalizedInput('cloudinary_api_secret');

        if (!cloudinary_cloud_name || !cloudinary_api_key || !cloudinary_api_secret) {
            helper.fail('Please complete the form and click HACK again');
            return;
        }

        cloudinary.config({
            cloud_name: cloudinary_cloud_name,
            api_key: cloudinary_api_key,
            api_secret: cloudinary_api_secret
        });

        http.get(cloudinary.url('sample'),function(res){
            if(res.statusCode !== 200){
                helper.fail(`Sorry, that didn't work. Please check your information and try again.`);
                return;
            }
            browser.show();
           /* browser.display(`
                <div style="width:100%;text-align: center;">
                    <h1>Pulling a sample image from your account.</h1>
                    <img src="${cloudinary.url('sample')}" alt="sample image">
                </div>
            `);*/

        /*     browser.display(`
             <div style="width:100%;text-align: center;">
                    <h1>You have received your new Employee Badge for the Ship!</h1>
                    <img src="https://res.cloudinary.com/demo/image/facebook/c_fill,h_160,w_160,c_thumb,g_face,r_20/l_text:helv_bd_24_blue:Staff%20Badge,g_north/l_text:helv_bd_24_blue:Name:%0A ${cloudinary_cloud_name} ,g_south/700144026.png" alt="sample image">
             </div>
            `); */

            browser.display(`
             <div style="width:100%;text-align: center;">
                    <h1>You have received your new Employee Badge for the Ship!</h1>
                    <img src=" https://res.cloudinary.com/tessamero/image/upload/dpr_auto,f_auto,w_400,c_lpad,e_colorize,co_rgb:3448C5,g_north,fl_ignore_aspect_ratio/w_160,h_300/l_text:Arial_24_bold:Staff%20Badge,co_rgb:fff,g_north,y_10/l_text:Arial_24_bold:Name:%0A ${cloudinary_cloud_name} ,co_rgb:0C163B,g_south,y_10/v1629391952/TwilioQuest/badge.png" alt="sample image">
             </div>
            `);

/* https://res.cloudinary.com/demo/image/facebook/c_fill,h_190,w_190,c_thumb,g_face,r_20/l_text:helv_bd_24_blue:Staff%20Badge,g_north/l_text:helv_bd_24_blue:Employee%20Name:%0A,g_south/700144026.png */
            //This stores the values into environment variables of 'name'
            helper.success(`Hooray! You did it!`, [
                {name: 'CLOUDINARY_CLOUD_NAME', value: cloudinary_cloud_name},
                {name: 'CLOUDINARY_API_KEY', value: cloudinary_api_key},
                {name: 'CLOUDINARY_API_SECRET', value: cloudinary_api_secret, concealed: true}
            ]);
        });



    } catch (e) {
        console.error(e);
    }
};