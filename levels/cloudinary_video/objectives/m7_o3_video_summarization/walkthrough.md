# Help Guide

## Objective-specific Resources
- [Transformation Reference: Preview](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#e_preview)

## Detailed Instructions
Refer to the documentation above to learn how to use the preview parameter.

You'll need to use the `duration`, `max_seg`, and `min_seg_dur` properties with the `preview` parameter to get this to work!

You should also make sure that you have access to the demo folder by utilizing the auto upload mapping feature described in the objective's tab.

Example:
```
.../video/upload/e_preview:duration_12.0:max_seg_3:min_seg_dur_3.0/imagecon_grigsby_intro.mp4
```
<div>
   <video muted controls width="600">
      <source src="https://res.cloudinary.com/demo/video/upload/e_preview:duration_12.0:max_seg_3:min_seg_dur_3.0/imagecon_grigsby_intro.mp4" type="video/mp4">
   </video>
</div>

This example shows a preview of the Grigsby video, lasting 12.0 seconds long with a maximum of 3 segments. Each segment also lasts at least 3 seconds.


### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)