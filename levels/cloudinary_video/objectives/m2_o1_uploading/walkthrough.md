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

<style>
    img {
        max-width: 250px;
    }
</style>

# Help Guide

## Objective-Specific Resources
* [Image Video and File Upload](https://cloudinary.com/documentation/image_video_and_file_upload?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

## Detailed Instructions
Let's upload our first asset using the **Media Library**. We're going to use a small, free for commercial use, no attribution required video.

1. Download [this video](https://pixabay.com/videos/succulent-lemon-pig-face-flower-14467/)
    a. Click the green **Free Download** button.
    b. Select **640x360** for the resolution, then click **Download**.
    c. Save the **Succulent - 14467.mp4** file to your computer.

The download options should look something like this:

![Screenshot of pixabay](<%=getImageUrl('images/objectives/m2_o1_pixabay.png')%>)

2. Go to [Media Library](https://cloudinary.com/console/media_library?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) in the [Cloudinary Console](https://cloudinary.com/console?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) 

3. Upload the **Succulent - 14467.mp4** file by either dragging the file into the browser window OR clicking the **Upload button** and then selecting **Upload Local Files**.

![Screenshot of upload button](<%=getImageUrl('images/objectives/m2_o1_upload.png')%>)

Now that the file is uploaded, click the 3 dots on top right corner of the asset and click on **Copy URL**. Go back to TwilioQuest to paste it into the Resource URL input box. Finally, click _HACK_ to proceed.

![Screenshot of copy link button](<%=getImageUrl('images/objectives/m2_o1_copylink.png')%>)


### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)