# Help Guide

### Objective-specific Resources
Reference: [Transform URL API](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)
 - [`fl_splice`](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#fl_splice)
 - [`l_video`](https://cloudinary.com/documentation/video_manipulation_and_delivery?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#adding_video_overlays)
 - [`/fl_layer_apply/`](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#fl_layer_apply)

### Detailed Instructions

Creating a video from multiple other videos requires some fairly complicated urls so here are some useful tips.

The last part of the url (the target video) will be the first video that plays in the sequence, and then all of the _fl_splice_ sections will play in order of appearance in the url.

Each spliced clip will take the form of:
```/fl_splice,l_video:<public id>/<any transforms of the clip>/fl_layer_apply/
```

_fl_splice_ causes the clip to be spliced in (concatenated), instead of overlayed.

_l_video_ and _/fl_layer_apply/_ are start and end tags, wrapping up any transforms that need to be applied to the clip.


<br>

### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)