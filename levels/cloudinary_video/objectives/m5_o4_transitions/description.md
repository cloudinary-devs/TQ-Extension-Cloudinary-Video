<%

const path = require('path');
const state = require(
path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/lib/state'));

try{
   url = state.getAnswers('m5_o3_combining_clips').value().answer3
   color='blue';
}catch(e){
   url ='Uh oh, nothing found, go back and do the prior objective first!';
   color='red';

}

%>

# Adding Transition Overlays
<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Add transitions to our last video</li>
    </ul>
</div>

Way to go! Our **Flower** video is greatly enhanced with these complimentary videos we added. Now, can we add transitions to the spliced videos to further enhance the overall video?

> <b>TIP:</b> Experiment with URLs without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## Preparation
We'll be using a [luma matte](https://cloudinary.com/documentation/video_manipulation_and_delivery#luma_matte) transition video from the Cloudinary Demo account. Since we've already set up the Auto Upload mapping, we can request `/demo/transition1` to get the file automatically uploaded into the `/demo` folder in our account.


## <a name="questions">Questions</a>

1. Enter the URL for the demo/transition1.mp4 [luma matte](https://cloudinary.com/documentation/video_manipulation_and_delivery#luma_matte) transition video.

2. Modify the URL you created in the last objective (shown below) to add the _demo/transition1_ transition for a **2-second duration** between each clip. 
   - This is the URL you previously provided:<div style='overflow-wrap: break-word'><%-url%></div><button onclick='window.CloudinaryBrowser.showUrlExplorer("<%-url%>");'>Load URL in Cloudinary Explorer</button>
   
