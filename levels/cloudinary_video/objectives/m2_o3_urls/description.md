# Resource URLS

<div class="aside">
<h3>AGENDA</h3>
<ul>
  <li>Learn about Cloudinary URL parameters</li>
  <li>Scale your flower video by 50% in size</li>
</ul>
</div>

Now that you renamed your asset to Flower.mp4, it'll be easier to work with! We want you to understand URL parameters and scaling videos. It'll be easy, promise!

********************

The default Cloudinary asset delivery URL has the following structure:

```
https://res.cloudinary.com
/<your_cloud_name>
/<asset_type>
/<delivery_type>
/<transformations>
/<version>/<public_id_full_path>.<extension>
```

The plain url for the video you uploaded probably looks like:
```
https://res.cloudinary.com
/<cloud_name>
/video
/upload
/v123456...
/TwilioQuest/Flower.mp4
```
We can specify transformation parameters to change how the asset is delivered. For example, let's resize the video to 50% of it's size by adding the following scale mode parameter.
```
c_scale,w_0.5
```

Modify your asset url so that it is in this format:
```
https://res.cloudinary.com
/<cloud_name>
/video
/upload
/c_scale,w_0.5
/<version>
/TwilioQuest/Flower.mp4
```

For the first anwer, enter your original flower video URL by copying it from your Cloudinary media library.

For the second answer, add **/c_scale,w_0.5/** after the **/upload/** parameter in your URL to scale it by 50% and enter the URL.

You will see a side by side comparison of the original and the scaled version after you succeed!

click _HACK_ to proceed.
