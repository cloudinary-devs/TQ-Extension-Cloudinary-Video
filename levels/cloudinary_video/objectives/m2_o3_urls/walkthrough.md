# Help Guide

## Objective-specific Resources

* [Image Resizing and Scaling](https://cloudinary.com/documentation/resizing_and_cropping#scale)


## Detailed Instructions 
The default Cloudinary asset delivery URL has the following structure:

```
https://res.cloudinary.com
/<your_cloud_name>
/<asset_type>
/<delivery_type>
/<transformations>
/<version>/<public_id_full_path>.<extension>
```

We can specify transformation parameters to change how the asset is delivered. For example, let's resize the video to 50% of it's size by adding the following scale mode parameter:
```
c_scale,w_0.5
```

Modify your asset URL so that it is in this format:
```
https://res.cloudinary.com
/<cloud_name>
/video
/upload
/c_scale,w_0.5
/<version>
/TwilioQuest/Flower.mp4
```

Use this URL for your response for the Scaled Down URL.

### Additional Documentation

[Cloudinary Documentation](https://cloudinary.com/documentation?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary Academy](https://training.cloudinary.com?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Cloudinary CookBook Recipes - Transformation Examples](https://cloudinary.com/cookbook?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021)

[Discord Community](https://discord.gg/CCsubwFbvd)