# Help Guide

### Objective-specific Resources
* [Image Video and File Upload](https://cloudinary.com/documentation/image_video_and_file_upload)
* [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery)

This content is a subset of content from the completely free [Cloudinary Academy](https://training.cloudinary.com/). 

### Detailed Instructions


The feature we're look for is called [Text Overlays](https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_overlays) and uses over**L**ay parameters, specifically *l_text:*

```
/l_text:arial_80:Sample%20Video/
```
This will add a "Sample Video" watermark in Arial font, sized 80 pixels large, to our dog video and will last the full duration of the video.
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video/dog.webm" type="video/mp4">
   </video>
</div>

Cloudinary supports all [Google fonts](https://fonts.google.com/) and even [your own custom/purchased fonts](https://cloudinary.com/documentation/layers#custom_fonts). 

You can also use CSS-like styles: 

`l_text:verdana_75_bold_underline_letter_spacing_14:Flowers`

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

## Position

We can also position it using the gravity *g_* parameter and *x_* and *y_* to offset it from the edge(s) defined by the gravity. So if we wanted to move the watermark to 20 pixels from the very bottom of the screen, we would add:
```
g_south,y_20
```
for a long series of parameters like:
~~~text
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,y_20/
~~~
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,y_20/dog.webm" type="video/mp4">
   </video>
</div>

Can you guess how to put the text for your **Flower** video on the bottom right? (Think "south east")

## Color

We can also change the Color *co_* of the text by providing a color in the same way that we do with web colors.
|Type|Example|
|----|---|
|Named|co_gray|
|RGB 3 char | co_rgb:777|
|RGB hex triplet| co_rgb:123ABC|
|RGB quad|co_rgb:123ABC66 (66 opacity)|

Example:
```
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,y_20,co_e3000088/
```

<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,co_rgb:e3000088,so_2.0,eo_5.0,g_south,y_20/dog.webm" type="video/mp4">
   </video>
</div>


### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)