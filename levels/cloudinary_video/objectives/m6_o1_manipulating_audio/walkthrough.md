# Help Guide

## Objective-specific Resources
- [Adjust the Audio Volume](https://cloudinary.com/documentation/audio_transformations?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#adjust_the_audio_volume) 

## Detailed Instructions
You'll need to use a new parameter that we haven't learned yet to adjust the volume of the video. I think [this link on adjusting volume](https://cloudinary.com/documentation/audio_transformations?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#adjust_the_audio_volume) and [this link on the e_volume parameter](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#e_volume) are what we need. Luckily, it's that simple- we add that `e_volume` parameter, set a percentage or dB value, and we should be good to go!


Example: No volume adjustment

~~~text
.../video/upload/ski_jump.mp4
~~~
<div>
   <video muted controls width="600">
      <source src="https://res.cloudinary.com/demo/video/upload/ski_jump.mp4" type="video/mp4">
   </video>
</div>

Example: Decrease volume by 50%

~~~text
.../video/upload/e_volume:-50/ski_jump.mp4
~~~
<div>
   <video muted controls width="600">
      <source src="https://res.cloudinary.com/demo/video/upload/e_volume:-50/ski_jump.mp4" type="video/mp4">
   </video>
</div>

Example: Increase volume by 25%

~~~text
.../video/upload/e_volume:25/ski_jump.mp4
~~~
<div>
   <video muted controls width="600">
      <source src="https://res.cloudinary.com/demo/video/upload/e_volume:25/ski_jump.mp4" type="video/mp4">
   </video>
</div>

Example: Muted example

~~~text
.../video/upload/e_volume:mute/ski_jump.mp4
~~~
<div>
   <video muted controls width="600">
      <source src="https://res.cloudinary.com/demo/video/upload/e_volume:mute/ski_jump.mp4" type="video/mp4">
   </video>
</div>


Note that there are different inputs you can add as the parameter's value, but I would focus on the percentages.



### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)