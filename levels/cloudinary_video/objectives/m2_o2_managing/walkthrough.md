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
        max-width: 400px;
    }
</style>

# Help Guide

## Objective-Specific Resources
* [Media Library](https://cloudinary.com/console/media_library?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Create a folder](https://cloudinary.com/documentation/dam_folders_collections_sharing#create_folders?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Change the video asset](https://cloudinary.com/documentation/dam_manage_individual_assets?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)


## Detailed Instructions

Use the [Media Library](https://cloudinary.com/console/media_library?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) to organize the assets you upload. 

Let's organize the file we uploaded by putting it into a new folder called **TwilioQuest**.

1. Go to the [Media Library](https://cloudinary.com/console/media_library?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) in your Cloudinary Console.
2. [Create a folder](https://cloudinary.com/documentation/dam_folders_collections_sharing#create_folders?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) by clicking on the **New Folder** button on the top left. Name this new folder **TwilioQuest**. Click _Save_.
![Screenshot of new folder button](<%=getImageUrl('images/objectives/m2_o2_newfolder.png')%>)
![Screenshot of naming the folder](<%=getImageUrl('images/objectives/m2_o2_namefolder.png')%>)

3. Select your **Succulent** video file, then click ["Move to folder"](https://cloudinary.com/documentation/dam_folders_collections_sharing#move_assets_between_folders?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) on the top right.

![Screenshot of moving to folder 1](<%=getImageUrl('images/objectives/m2_o2_movetofolder.png')%>)
![Screenshot of moving to folder 2](<%=getImageUrl('images/objectives/m2_o2_movetofolderwidget.png')%>)


4. Open the **TwilioQuest** folder to find your **Succulent** video.

Now let's change the name of our asset to something easier to remember!

1. Click on the **Succulent - 14467.mp4** name on your **Succulent** video to open the **Manage** screen. If this doesn't happen, try to double click the image thumbnail of the video instead.
2. [Change the video asset](https://cloudinary.com/documentation/dam_manage_individual_assets?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) name. Click on the **Succulent - 14467.mp4** name on the top left and replace the text with **Flower**.

![Screenshot of manage screen](<%=getImageUrl('images/objectives/m2_o2_manage.png')%>)
![Screenshot of manage screen](<%=getImageUrl('images/objectives/m2_o2_newname.png')%>)

3. Close the Manage screen. **Copy the new URL** as you've done in the previous objective, and paste it into the hack interface to proceed.

Your answer should look similar to this:

```
https://res.cloudinary.com/<cloud_name>/video/upload/v1627081950/TwilioQuest/Flower.mp4
```


### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)