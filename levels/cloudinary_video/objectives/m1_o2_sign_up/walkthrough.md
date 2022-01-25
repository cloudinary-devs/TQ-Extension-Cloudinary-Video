<%
const path = require('path');
const fileUrl = require('file-url');

function getImageUrl(extRelativePath) {
  try {
    const imagePath = path.join(
      context.extensions.directory,
      'TQ-Extension-Cloudinary-Video',
      extRelativePath
    );
    const fileUrlPath = fileUrl(imagePath);
    return fileUrlPath;
  } catch (e) {
    console.log('embedded image path not found:', path);
    console.log(e);
    // A default image that exists in the app bundle
    return fileUrl('images/cloudinary_icon.png'); 
  }
}
%>

# Help Guide

## Objective Help

You need to create a **Cloudinary account** to complete the objectives on the **Cloudinary ship**. To learn more about creating an account, please click on the link below: 

[Documentation: Creating a Cloudinary Account](https://cloudinary.com/documentation/how_to_integrate_cloudinary#1_create_and_set_up_your_account?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

## Signing Up for a Cloudinary Account

The primary action you need to do is to go to [cloudinary.com/signup](https://cloudinary.com/signup) to register for a free Cloudinary account. This free account gives you [25 credits](https://cloudinary.com/blog/understanding_cloudinary_s_transformation_quotas?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) per month that will be far more than enough for this adventure and any other experimenting that you would like to do.

When creating a Cloudinary account, you will need to input your name, email address, and country. Come up with a strong password that you will use to access your account in the future. Finally, for the product section, select "Programmable Media for image and video API".

You will get the opportunity to change your default Cloud Name. Feel free to change this, but it is optional.

## Retrieving Your Cloudinary Information

After creating your account, you will land on the [Cloudinary Dashboard](https://cloudinary.com/console?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021). The middle of the screen should look something like this:

![Screenshot of dashboard](<%=getImageUrl('images/objectives/m1_o2_dashboard.png')%>)

You will find your Cloudinary **Cloud Name**, **API Key**, and **API Secret** in the middle of the screen, in the **Account Details** section. You can copy the information by clicking on the "Copy" button (the button with two rectangles overlapping each other), which appears when you hover over the boxes for each piece of information you need! Copy this information into the form on the right, and click _HACK_ to verify and save this information.






 
### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)
