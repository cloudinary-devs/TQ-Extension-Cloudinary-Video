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

<b>TIP:</b> Experiment with urls without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## Preparation Steps
1. Upload this file to your account. <br><a download href="<%=getLocalImage('cloudinary_icon.png')%>">![](<%=getLocalImage('cloudinary_icon.png')%>)</a>(click to download)
2. Put it in the TwilioQuest folder
3. Maker sure it's named "cloudinary_icon". (strip off any extra unique characters if they have been added to the name.)


## <a name="questions">Questions</a>

Your answers to these questions must use your Flower video.

1. <a name="q1"></a>Create a url for the flower video that will show the cloudinary logo in the lower left corner. Enter a url in <a onclick="jQuery('input')[0].focus()">Answer 1</a> that specifies:
   - Video Sized [hint](https://cloudinary.com/documentation/video_manipulation_and_delivery#scale):
     - 400 pixels wide
   - With Overlay Image
     - Image is the cloudinary icon image you uploaded as cloudinary_logo
     - Opacity 50%
     - Start showing at the beginning of the video and stop at the 10s mark to disappear just before the video fades to black 
     - Position in the lower left corner
        - 10 pixels from the bottom edge
        - 10 pixels from the left edge