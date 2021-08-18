<%
const path = require('path');
const fileUrl = require('file-url');

function getLocalImage(relativePath) {
    return fileUrl(path.join(context.extensions.directory,
    'twilioquest-extension-template/images',relativePath));
}
%>

# Orientation
<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li><b>Sign Up</b> for a free Cloudinary Account.</li>
  <li><b>Configure</b> your environment.</li>
</ul>
</div>

There are few things to do before we can really get started.

## Sign Up

Go to [cloudinary.com/signup](https://cloudinary.com/signup) to register for a free account. This free account gives you 25 credits per month that will be far more than enough for this adventure and any other experimenting that you would like to do.

## Configure
Once you've signed up, go the Cloudinary [Dashboard](https://cloudinary.com/console) to get your:
* Cloud Name
* API Key
* API Secret

You will need these to complete this objective and configure access to Cloudinary account.  Enter the information into the form on the right and click _HACK_ to verify and save this information.