# Help Guide

### Objective-specific Resources
* [Image Video and File Upload](https://cloudinary.com/documentation/image_video_and_file_upload?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Setting the Opacity](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#o_opacity)
* [Adding Image Overlays](https://cloudinary.com/documentation/video_layers?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#image_overlays)


This content is a subset of content from the completely free [Cloudinary Academy](https://training.cloudinary.com/). 


### Detailed Instructions

Just like the _l_text_ layers that we added in the last objective, we can add images using the root layer _l\__ property and appending the public name of an image from our account. 

See [Adding Image Overlays](https://cloudinary.com/documentation/video_layers?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#image_overlays) and pay careful attention to the **Important** note. Since we are using an image from our TwilioQuest folder, we'll need to use the ":" notation like `.../l_twilioquest:cloudinary_icon,.../`.

Here is an example of overlaying an image on top of another video:
~~~text
.../video/upload/l_dog,w_250,so_2.0,eo_5.0,g_south_west,x_20,y_30,o_50/cat.webm
~~~

Note how the parameters are specified with commas instead of slashes, in this context.

<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_dog,w_250,so_2.0,eo_5.0,g_south_west,x_20,y_30,o_50/cat.webm" type="video/mp4">
   </video>
</div>

## Opacity

Use the opacity [_o\__](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#o_opacity) parameter so that the icon blends in with the video a little better. 

Example:
~~~text
.../video/upload/l_dog,w_250,o_50/cat.webm
~~~
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_dog,w_250,o_50/cat.webm" type="video/mp4">
   </video>
</div>


## Duration

We can provide start *so_* and end *eo_* timing parameters measuring in seconds from the start of the video:
```
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0/
```

<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0/dog.webm" type="video/mp4">
   </video>
</div>

Text that lasts a video's full duration does not need the *so_* and *eo_* timing parameters.

## Gravity and Position
Recall all the gravity directions you can use:

||||
|--|--|--|
|Top Right<br>`g_north_east`|Top<br>`g_north`|Top Right<br>`g_north_west`|
|Left<br>`g_west`|Middle<br>`g_center`|Right<br>`g_east`|
|Bottom Left<br>`g_south_west`|Bottom<br>`g_south`|Bottom Right<br>`g_south_east`|

Here's a modified example from the last example, for reference:

~~~text
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,x_10,y_20/
~~~
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,x_10,y_20/dog.webm" type="video/mp4">
   </video>
</div>

### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)