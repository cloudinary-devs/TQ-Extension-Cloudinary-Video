# Combining Clips
<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Combine Videos into a Single Video</li>
      <li>Use Auto Upload mapping to use files from the Cloudinary demo account.</li>
    </ul>
</div>

Nice work so far on the **Cloudinary ship**! There's a new request from our partners regarding how we can enhance our **Flower** video. They want us to add some additional videos to it to increase its overall length. Would you be able to do that for us?

> <b>TIP:</b> Experiment with URLs without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## Preparation
We'll be using videos from the **Cloudinary demo account**. In order to use them in our account, we'll create an Auto Upload Mapping:
1. Go to [Upload Settings](https://cloudinary.com/console/lui/settings/upload) in the [Cloudinary Console](https://cloudinary.com/console?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) and create a new **Auto Upload mapping** with these settings:
   - Folder: demo
   - URL Prefix: https://res.cloudinary.com/demo/video/upload/
2. Confirm that the settings are saved by pressing the **"Save"** button on the bottom of the webpage. This will make all of the Cloudinary demo account files available for transformation in our account through a virtual /demo folder.


## <a name="questions">Questions</a>

> TIP: Images can only be used in layers after they have been fetched into your account directly, so the first two questions serve a secondary purpose to cause the initial creation by requesting them directly.

1. Enter the URL for the kitten_fighting video in your /demo folder.
2. Enter the URL for the dog video in your /demo folder.
3. <a name="q1"></a>Create a URL for a video that shows the video clips in the following order:
   - demo/dog.mp4
   - demo/kitten_fighting.mp4
   - TwilioQuest/Flower.mp4

Hint: the order of the splicing parameters (`fl_splice,l_video/<additional-parameters>/fl_layer_apply`) matters.
4. For each video, `c_fill` it to a size of 300 pixels wide and 200 pixels high.