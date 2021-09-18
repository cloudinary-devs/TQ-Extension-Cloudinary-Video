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

## Preparation Steps
Your account starts with a set of sample videos.  In this exercise, we'll be using the sea-turtle video from the /samples folder. 

## <a name="questions">Questions</a>

Your answers to these questions must use your Flower video and the sea-turtle sample video from your Media Library /samples folder.

1. <a name="q1"></a>Create a url for a video that will show the flower video in a circular frame in the lower left corner overlaying the sea-turtle video. Enter a url in <a onclick="jQuery('input')[0].focus()">Answer 1</a> that specifies:
   - Video Sized [hint](https://cloudinary.com/documentation/video_manipulation_and_delivery#scale):
     - 400 pixels wide
   - With Overlay Video
     - Flower video
     - Size:width 150px
     - Ellipse shaped frame
     - Position in the lower left, 10 pixels from the edge
     - End the flower video at 10s; before the video goes black