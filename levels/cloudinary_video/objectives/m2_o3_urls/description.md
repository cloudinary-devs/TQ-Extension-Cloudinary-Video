# Resource URLS

<div class="aside">
<h3>AGENDA</h3>
<ul>
  <li>Learn about URLs</li>
  <li>Parts and Parameters</li>
</ul>
</div>

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

Modify your asset url so that it looks like
```
https://res.cloudinary.com
/<cloud_name>
/video
/upload
/c_scale,w_0.5
/<version>
/TwilioQuest/Flower.mp4
```
Enter the url 
click _HACK_ to proceed.
