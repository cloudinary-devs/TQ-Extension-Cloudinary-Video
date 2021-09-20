# Combining Clips
<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Combine Videos into a Single Video</li>
      <li>Use Auto Upload mapping to use files from the cloudinary demo account.</li>
    </ul>
</div>

## Preparation
We'll be using videos from the Cloudinary demo account. In order to use them in our account, we'll create an Auto Upload Mapping by:
1. Got to [Upload Settings](https://cloudinary.com/console/lui/settings/upload) in the Cloudinary Console and create a new Auto Upload mapping with these settings:
   - Folder: demo
   - URL Prefix: https://res.cloudinary.com/demo/video/upload/
2. This will make all of the cloudinary demo account files available for transformation in our account through a virtual /demo folder.
3. Images can only be used in layers after they have been fetched into your account directly, so the first two questions serve a secondary purpose to cause the initial creation by requesting them directly. 

## <a name="questions">Questions</a>

1. Enter the url for the kitten_fighting video in your /demo folder.
2. Enter the url for the dog video in your /demo folder.
3. <a name="q1"></a>Create a url for a video that shows the video clips in the following order. (hint, the fl_splice,l_video//fl_layer_apply order matters.) c_fill each video to a size of 300 pixels wide, 200 pixels high
   - demo/dog.mp4
   - demo/kitten_fighting.mp4
   - TwilioQuest/Flower.mp4