# Help Guide

### Objective-specific Resources
* [Image Video and File Upload](https://cloudinary.com/documentation/image_video_and_file_upload?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
* [Transformation Reference: Round Corners](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#r_round_corners)

### Detailed Instructions
_r__ is the general transformation parameter that is used to round corners of the video (and images too, with even more options). Take a look at this documentation on [rounded corners](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#r_round_corners) to answer the questions.

## Radius 
Use the `r_` parameter to set a bordered radius.

For this objective, add the `r_` parameter to the c_scale parameter and separate them with commas.

Example:
~~~text
.../video/upload/c_scale,w_600,r_50/dog.webm
~~~
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com//video/upload/c_scale,w_600,r_50/dog.webm" type="video/mp4">
   </video>
</div>


## Color
We can change the color of the video background by providing a color in the same way that we do with web colors.

|Type|Example|
|----|---|
|Named|b_gray|
|RGB 3 char | b_rgb:777|
|RGB hex triplet| b_rgb:123ABC|
|RGB quad|b_rgb:123ABC66 (66 opacity)|

Example:
~~~text
.../video/upload/c_scale,w_600,r_250/dog.webm
~~~
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/c_scale,w_600,r_250,b_rgb:123ABC/dog.webm" type="video/mp4">
   </video>
</div>


### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)