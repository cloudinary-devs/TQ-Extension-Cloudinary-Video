<%
const path = require('path');

function getLocalImage(imageName) {
return path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/images', imageName);
}
%>
# Giving Credit
<div class="aside">
    <h3>AGENDA</h3>
    <ul>
      <li>Create videos with rounded edges</li>
    </ul>
</div>

Let's create some special videos that are not just rectangles! I know with your experience on the **Cloudinary ship**, we will be able to change the shapes of the **Flower** video with ease. Why don't you give it a shot?

> <b>TIP:</b> Experiment with URLs without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## <a name="questions">Questions</a>
Create URLs for the flower video that have the following specifications:

### Video 1 - Rounded Corners
1. Size: 200 pixels wide
2. Corner radius: 40 pixels
3. Background color: rgb:1f243c

### Video 2 - Ellipse

1. Size: 200 pixels wide
2. Corner radius: maximum to make it an oval
3. Background color: rgb:1f243c

### Video 3 - Circular

1. Size: 100x100 pixels
2. Corner radius: maximum to make it a circle
3. Background color: rgb:1f243c

> Press the _HELP_ button on the top right of this window for more details!