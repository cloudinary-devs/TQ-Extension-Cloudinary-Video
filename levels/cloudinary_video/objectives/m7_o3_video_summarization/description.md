# Video Summaries

<div class="aside">
<h3>AGENDA</h3>
<ul>
  <li>Add the hotel video to your media library using auto upload mapping.</li>
  <li>Create a summarized preview of the hotel video.</li>
</ul>
</div>


Thanks for your help! We need to make a video summary of a hotel that we are planning on booking for our special Cloudinary event. Will you help us by using the [preview](https://cloudinary.com/documentation/transformation_reference?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021#e_preview) parameter with our hotel video?

<br>

> <b>TIP:</b> Experiment with URLs without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

********************


## Preparation
We'll be using videos from the **Cloudinary demo account**. You set this up in Mission 5: Video Editing, but in case you forgot, let's double check that you made an auto upload mapping!
1. Go to [Upload Settings](https://cloudinary.com/console/lui/settings/upload?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) in the [Cloudinary Console](https://cloudinary.com/console?utm_source=twilio&utm_medium=event&utm_campaign=cloudinary-twilioquest-2021) and create a new **Auto Upload mapping** with these settings:
   - Folder: demo
   - URL Prefix: https://res.cloudinary.com/demo/video/upload/
2. Confirm that the settings are saved by pressing the **"Save"** button on the bottom of the webpage. This will make all of the Cloudinary demo account files available for transformation in our account through a virtual /demo folder.

## Instructions

1. Get the link to the `hotel` video from your demo folder. It should look something like this:
```
https://res.cloudinary.com/<cloud_name>/video/upload/demo/docs/hotel.mp4
```
Post this link as your first answer to this objective.

2. Now, take that video and use the `preview` parameter to get the video summarization with the following properties:
  - The duration should be 10 seconds long.
  - There should be 3 segments max.
  - The minimum segment duration should be autoset based on video duration (hint: leave it blank).

3. Paste the link as your second answer to this objective.

4. Click _HACK_ to proceed.

