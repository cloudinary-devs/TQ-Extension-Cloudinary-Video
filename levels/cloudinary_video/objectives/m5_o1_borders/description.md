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

<b>TIP:</b> Experiment with urls without leaving the game, using the <button onclick='window.CloudinaryBrowser.showUrlExplorer();'>Cloudinary Explorer</button>

## <a name="questions">Questions</a>
Create urls for the flower video that have the following specifications.

### Video 1 - Rounded Corners
1. Size 200 pixels wide
2. Corner radius 40 pixels
3. Specify a background color of rgb:1f243c to make it blend in with the browser canvas.

### Video 2 - Ellipse

1. Size 200 pixels wide
2. Corner radius maximum to make it an oval
3. Specify a background color of rgb:1f243c to make it blend in with the browser canvas.

### Video 3 - Circular

1. Size 100x100 pixels
2. Corner radius maximum to make it a circle
3. Specify a background color of rgb:1f243c to make it blend in with the browser canvas.
