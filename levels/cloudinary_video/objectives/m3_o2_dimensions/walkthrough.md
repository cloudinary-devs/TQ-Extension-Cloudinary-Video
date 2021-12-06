# Help Guide

## Objective-specific Information
Sections related to this mission/objective:
* [Cloudinary Resizing and Cropping](https://cloudinary.com/documentation/resizing_and_cropping?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

## Detailed Instructions

**Note: For illustration in these instructions, we'll be using a Cloudinary sample video, but your answers to the [Questions](#questions) must use your Flower video.**

This is the original sample video.
<div style="border:1px solid blue">
   <video muted controls>
      <source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_690/dog.webm" type="video/mp4">
   </video>
</div>

## <a name="scale">Scale</a>

We can use the same *c_scale* operation to change the size of a video to specific dimensions using the width (w) and height (h) parameters. Note: The video will be distorted if both width (w) and height (h) are specified in a different ratio than the original video.

### Scale Example

```
/c_scale,w_150/dog.webm
```

This scales the video to a width of 150 pixels leaving the height to be calculated automatically.
<div style="border:1px solid blue;width:150px;">
   <video muted controls>
      <source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_150/dog.webm" type="video/mp4">
   </video>
</div>

## <a name="fit">Fit</a>

Fit *c_fit* is like scale, but **specifically guarantees the aspect ratio won't change** and makes the video as large as possible within the specified dimensions.

### Fit Example

```
/c_fit,h_250,w_250/dog.mp4
```

This fits the video to a maximum height or width of 250 pixels. A blue box shows the requested dimensions.
<div style="border:1px solid blue;width:250px;height:250px;">
    <video muted controls>
        <source src="https://res.cloudinary.com/demo/video/upload/c_fit,h_250,w_250/dog.mp4" type="video/mp4">
    </video>
</div>

## <a name="fill">Fill</a>

Fill *c_fill* closes the gaps that **Fit** and **Scale** leave when the aspect ratio of the container and the
video differ. Deciding what gets filled and what gets clipped involves specifying GRAVITY.

### No Specific Gravity Example

```
c_fill,h_250,w_250/dog.mp4
```
<div style="border:1px solid blue;width:250px;height:250px;">
   <video muted controls>
      <source src="https://res.cloudinary.com/demo/video/upload/c_fill,h_250,w_250/dog.mp4" type="video/mp4">
   </video>
</div>

### Gravity Example

In addition to auto *g_auto*, Gravity can be set to *g_north_east*, *g_north*, *g_north_west*, *g_west*, *g_south_west*, *g_south*, *g_south_east*, *g_east*, or *g_center*

#### Specific Gravity

```
/c_fill,g_east,h_250,w_250/dog.mp4
```

<div style="border:1px solid blue;width:250px;height:250px;">
   <video muted controls>
      <source src="https://res.cloudinary.com/demo/video/upload/c_fill,g_east,h_250,w_250/dog.mp4" type="video/mp4">
   </video>
</div>

#### Auto Gravity

```
/c_fill,g_auto,h_250,w_250/dog.mp4
```
<div style="border:1px solid blue;width:250px;height:250px;">
   <video muted controls>
      <source src="https://res.cloudinary.com/demo/video/upload/c_fill,g_auto,h_250,w_250/dog.mp4" type="video/mp4">
   </video>
</div>

## <a name="crop">Crop</a>

You can extract a part of a video using crop *c_crop*. You specify which part of the video to use for filling the required dimensions by giving the x and y coordinates of the top left corner, or by using the gravity parameter. The original proportions are retained.

```
/c_crop,h_100,w_350,x_230,y_110/dog.mp4
```
Now, our dog is peaking through a mail slot!
<div style="border:1px solid blue;width:350px;height:100px;">
   <video muted controls>
      <source src="https://res.cloudinary.com/demo/video/upload/c_crop,h_100,w_350,x_230,y_110/dog.mp4" type="video/mp4">
   </video>
</div>



### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)