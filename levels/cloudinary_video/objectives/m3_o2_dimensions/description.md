# Size it... Scale it... Clip it... Fit it...

<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Alter dimensions</li>
      <li>Manipulate Gravity!</li>
    </ul>
</div>

Buckle up!  We're going to cover a bunch of parameters all at once.  Fortunately, they are all related to changing the size and shape of a video.

We can tell Cloudinary to resize and crop videos in order to match specific needs. You can dynamically create multiple resized, cropped and manipulated videos on-the-fly and deliver them via dynamic URLs.

**Note: For illustration in these instructions, we'll be using a Cloudinary sample video, but your answers to the [Test Questions](#test) must use your Flower video.** 

This is the original sample video.

<video muted controls>
<source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_690/dog.webm" type="video/mp4">
</video>



## <a name="scale">Scale</a>

When learning about parameters we used an example of _/c_scale,w_0.5/_ to reduce the video dimensions by 50%. This is because passing in a percentage represented as a decimal value less than 1 will scale the video proportionally. 

We can use the same *c_scale* operation to change the size of a video using the width (w) and height (h) parameters. 

Note: The video will be distorted if both width (w) and height (h) are specified in a different ratio than the original video.

We can resize the video, either by using both the width and height parameters, or by using only one of them and Cloudinary will calculate the other dimension automatically to maintain the original aspect ratio.

### Scale Example
```text
https://demo-res.cloudinary.com/video/upload
    /c_scale,w_150/
dog.webm
```
...scales the video to a width of 150 pixels leaving the height to be calculated automatically.
<video muted controls>
    <source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_150/dog.webm" type="video/mp4">
</video>


## <a name="fit">Fit</a>
Fit *c_fit* is like scale, but **specifically guarantees the aspect ratio won't change** and makes the video as large as possible within the specified dimensions. This means the video may be enlarged beyond the original size.

### Fit Example
```
https://res.cloudinary.com/demo/video/upload
    /c_fit,h_250,w_250/
dog.mp4
```
..fits the video to a maximum height or width of 250 pixels. A blue box shows the requested dimensions.
<div style="border:1px solid blue;width:250px;height:250px;">
<video muted controls>
    <source src="
https://res.cloudinary.com/demo/video/upload/c_fit,h_250,w_250/dog.mp4
" type="video/mp4">
</video>
</div>

## <a name="fill">Fill</a>
Fill *c_fill* closes the gaps (Ba Dum Tsss) that Fit and Scale leave when the aspect ratio of the container and the video differ. The processing steps include:
1. Scale the video up or down to match both dimensions.
2. If the aspect ratio is different from the original image, cropping will occur for anything that exceeds the target dimensions.
3. The gravity parameter will control what get's clipped and if not specified it defaults to *g_auto* which does a content analysis.

Deciding what gets filled and what gets clipped involves specifying GRAVITY.

### No Specific Gravity Example
```
https://res.cloudinary.com/demo/video/upload/c_fill,h_250,w_250/dog.mp4
```
...some clipping occurs, and auto gravity decides to trim the sides to keep the subject in frame.
<div style="border:1px solid blue;width:250px;height:250px;">
<video muted controls>
    <source src="
https://res.cloudinary.com/demo/video/upload/c_fill,h_250,w_250/dog.mp4
" type="video/mp4">
</video>
</div>

### East Gravity Example
In addition to auto *g_auto*, Gravity can be set to*g_north_east*, *g_north*, *g_north_west*, *g_west*, *g_south_west*, *g_south*, *g_south_east*, *g_east*, or *g_center*
```
https://res.cloudinary.com/demo/video/upload/c_fill,g_east,h_250,w_250/dog.mp4
```
...an example, showing eastern gravity, not so good for this video.  
<div style="border:1px solid blue;width:250px;height:250px;">
<video muted controls>
    <source src="
https://res.cloudinary.com/demo/video/upload/c_fill,g_east,h_250,w_250/dog.mp4
" type="video/mp4">
</video>
</div>

## Test Your Might!

Your answers to these questions must use your Flower video.
<!-- @todo-p2 rewrite these with reasons for a final layout -->

1. <a name="q1"></a>Create a URL for the flower video that is 250 pixels wide using the [scale](#scale) parameter and enter the url in <a onclick="jQuery('input')[0].focus()">Answer 1</a> 
2. <a name="q2"/>Create a URL for the flower video that is 250 pixels wide using the [scale](#scale) parameter and enter the url in <a onclick="jQuery('input')[1].focus()">Answer 2</a> 
3. 