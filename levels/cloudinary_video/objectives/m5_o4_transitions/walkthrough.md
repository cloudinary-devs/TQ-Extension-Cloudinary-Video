# Summary


<!--
## Recap Splicing 

Creating a video from multiple other videos requires some fairly complicated urls so here are some useful tips.

The last part of the url (the target video) will be the first video that plays in the sequence, and then all of the _fl_splice_ sections will play in order of appearance in the url.

Each spliced clip will take the form of:
```/fl_splice,l_video:<public id>/<any transforms of the clip>/fl_layer_apply/
```

_fl_splice_ causes the clip to be spliced in (concatenated), instead of overlayed.

_l_video_ and _/fl_layer_apply/_ are start and end tags, wrapping up any transforms that need to be applied to the clip.

## Using Transitions
In order to [join a video using a transition](https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenate_videos_with_custom_transitions), we replace _fl_splice_ with _e_transition_,l_video:&lt;transition video public id&gt;

You can prefix that with a _/du_5.0/_ to make the transition last 5 seconds and other transforms can be applied to the transition luma matte video as well to vary the transition effect, see later sections of [Concatenate videos with custom transitions](https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenate_videos_with_custom_transitions)

<br>

# Detailed Information
Guide: [Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery) 
 - [Concatenate videos with custom transitions](https://cloudinary.com/documentation/video_manipulation_and_delivery#concatenate_videos_with_custom_transitions)

Reference: [Transform URL API](https://cloudinary.com/documentation/transformation_reference)
 - [_du_](https://cloudinary.com/documentation/transformation_reference#du_duration) (duration)
 - [_e_transition_](https://cloudinary.com/documentation/transformation_reference#e_transition)
 - [_fl_splice_](https://cloudinary.com/documentation/transformation_reference#fl_splice)
 - [_l_video_]()
 - [_/fl_layer_apply/_](https://cloudinary.com/documentation/transformation_reference#fl_layer_apply)

<br>
# Resources
## Training
 [Cloudinary Academy](https://training.cloudinary.com/) (it's free, comprehensive and self-paced)

## Full Documentation
Cloudinary documentation can be found here:
[https://cloudinary.com/documentation](https://cloudinary.com/documentation)
-->

### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)