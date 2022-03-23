<%
const path = require('path');

function getLocalImage(imageName) {
return path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/images', imageName);
}
%>
# Giving Credit
<div class="aside">
    <h3>LEARNING AGENDA</h3>
    <ul>
      <li>Adding an image to videos</li>
    </ul>
</div>

Wow, way to go! You're doing great with the management of our **Flower** video. Our partners will be very excited to use it.

We also want to leave our mark on the video. Why don't we put the Cloudinary logo on it? A picture on a video... sounds like a challenge!

> <b>TIP:</b> Experiment with URLs without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## Preparation Steps
1. Upload this **Cloudinary icon file** to your account in your [Media Library](https://cloudinary.com/console/media_library?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021): <br><a download href="<%=getLocalImage('cloudinary_icon.png')%>"><%=getLocalImage('cloudinary_icon.png')%></a>(click to download)
2. Put it in the **TwilioQuest** folder in your Media Library.
3. Rename the uploaded **Cloudinary icon file** to "cloudinary_icon". (strip off any extra unique characters if they have been added to the name.)


## <a name="questions">Questions</a>

Your answers to these questions must use your **Flower** video.

1. <a name="q1"></a>Create a url for the **Flower** video that will show the **Cloudinary logo** in the lower left corner. Enter a URL in <a onclick="jQuery('input')[0].focus()">Answer 1</a> with the following properties:
   - Video Size ([hint](https://cloudinary.com/documentation/media_optimizer_transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#c_scale)): 
     - 400 pixels wide
   - Overlay Image
     - Image: the Cloudinary icon image
     - Opacity: 50%
     - Video start time: beginning of the video
     - Duration: 10 seconds
     - Position: 
      a. bottom left corner
      b. 10 pixels from the bottom edge
      c. 10 pixels from the left edge