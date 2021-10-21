# Size it... Scale it... Clip it... Fit it...

<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Alter dimensions</li>
      <li>Manipulate Gravity!</li>
      <li>Answer <a href="#questions">Questions</a></li>
    </ul>
</div>

Great job on improving the quality of the video! One more thing, we do need to resize and crop the video for our big press release! It is important we have this perfectly optimized. Are you up for the task?

<b>TIP:</b> Experiment with urls without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

Buckle up!  We're going to cover a bunch of parameters all at once. Fortunately, they are all related to changing the
size and shape of a video.

We can tell Cloudinary to resize and crop videos in order to match specific needs. You can dynamically create multiple
resized, cropped and manipulated videos on-the-fly and deliver them via dynamic URLs.

**Note: For illustration in these instructions, we'll be using a Cloudinary sample video, but your answers to
the [Questions](#questions) must use your Flower video.**

This is the original sample video.
<div style="border:1px solid blue">
   <video muted controls>
      <source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_690/dog.webm" type="video/mp4">
   </video>
</div>

Parameters related to crop/resize functions are all prefixed with *c_*

## <a name="questions">Questions</a>

Your answers to these questions must use your Flower video.
<!-- @todo-p2 rewrite these with reasons for a final layout -->

1. <a name="q1"></a>Create a Flower video URL for <a onclick="jQuery('input')[0].focus()">Answer 1</a> using [scale](#scale) that is:
   - 150 pixels wide
2. <a name="q2"></a>Create a Flower video URL for <a onclick="jQuery('input')[1].focus()">Answer 2</a> using [fill](#fill) that is:
   - 300 pixels tall
   - 300 pixels wide
3. <a name="q3"></a>Create a Flower video URL for <a onclick="jQuery('input')[2].focus()">Answer 3</a> using [crop](#crop) that is
   - 100 pixel high
   - 350 pixels wide 
   - cropped at X:230, Y:110 