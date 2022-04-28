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
      <li>Picture in Picture</li>
    </ul>
</div>

Awesome work, friend! Let's add on to the knowledge we learned about applying image layers on top of videos by adding a video layer onto a video! 

> <b>TIP:</b> Experiment with urls without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## Preparation Steps
Your account starts with a set of sample videos.  In this exercise, we'll be using the **sea-turtle** video from the /samples folder. We will also use the **Flower** video from previous objectives.

## <a name="questions">Questions</a>

Your answers to these questions must use your Flower video and the sea-turtle sample video from your Media Library /samples folder.

1. <a name="q1"></a>Create a URL for a video that will show the **Flower** video in a circular frame in the lower left corner overlaying the **sea-turtle** video. Enter a URL in <a onclick="jQuery('input')[0].focus()">Answer 1</a> that specifies:
   - Base Video
     - **sea-turtle** video
     - Video Size: 400 pixels wide
   - Video Overlay
     - **Flower** video
     - Size: 150px wide
     - Frame: Ellipse-shaped
     - Position: 10 pixels from the bottom left corner
     - Start time: 0 seconds
     - End time: 10 seconds

> Press the _HELP_ button on the top right of this window for more details!