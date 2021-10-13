# Giving Credit
<div class="aside">
    <h3>LEARNING AGENDA</h3>
    <ul>
      <li>Adding text to videos</li>
      <li>Answer <a href="#questions">Questions</a></li>
    </ul>
</div>

<b>TIP:</b> Experiment with urls without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

We're borrowing the Flower video and though the license granted doesn't require attribution, it would be nice to give credit.

The feature we're look for is called [Text Overlays](https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_overlays) and uses over**L**ay parameters, specifically *l_text:*

```
/l_text:arial_80:Sample%20Video/
```
...adds a "Sample Video" watermark in font arial, size 80 (pixels), to our dog video and lasts the full duration of the video.
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video/dog.webm" type="video/mp4">
   </video>
</div>

Cloudinary supports all [google fonts](https://fonts.google.com/) and even [your own custom/purchased fonts](https://cloudinary.com/documentation/layers#custom_fonts). 

You can also use CSS-like styles For example, to overlay the text string "Flowers" in Verdana bold with a size of 75 pixels, underlined, and with 14 pixels spacing between the letters: l_text:verdana_75_bold_underline_letter_spacing_14:Flowers

## Duration

If we don't want it to run the full duration, we can provide start *so_* and end *eo_* timing parameters measuring in seconds from the start of the video.
```
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0/
```
...only shows the watermark starting at 2 seconds and ending at 5 seconds.
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0/dog.webm" type="video/mp4">
   </video>
</div>

## Position

We can also position it using our old friend the gravity *g_* parameter and *x_* and *y_* to offset it from the edge(s) defined by the gravity. So if we wanted to move the watermark to 20 pixels from the very bottom of the screen, we would add:
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

## Color

We can also change the Color *co_* of the text by providing a color in the same way that we do with web colors.
|Type|Example|
|----|---|
|Named|co_gray|
|RGB 3 char | co_rgb:777|
|RGB hex triplet| co_rgb:123ABC|
|RGB quad|co_rgb:123ABC66 (66 opacity)|

so...to make our text red and slightly transparent we can add
```
co_rgb:e3000088
```
to get:
```
/l_text:arial_80:Sample%20Video,so_2.0,eo_5.0,g_south,y_20,co_e3000088/
```
and create this:
<div>
   <video muted controls width="600">
      <source src="https://demo-res.cloudinary.com/video/upload/l_text:arial_80:Sample%20Video,co_rgb:e3000088,so_2.0,eo_5.0,g_south,y_20/dog.webm" type="video/mp4">
   </video>
</div>


## <a name="questions">Questions</a>

Your answers to these questions must use your Flower video.

1. <a name="q1"></a>Create a url for the flower video with an attribution line. Enter a url in <a onclick="jQuery('input')[0].focus()">Answer 1</a> that specifies:
   - Video Sized [hint](https://cloudinary.com/documentation/video_manipulation_and_delivery#scale):
     - 400 pixels wide
   - Attribution Text:
     - appear for the full duration
     - text is the creator's twitter: @DeloitteNick
     - font: Roboto
     - size: 30
     - weight: bold