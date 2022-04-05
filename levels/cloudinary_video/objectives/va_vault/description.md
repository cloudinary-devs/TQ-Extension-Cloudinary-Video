
<%

const path = require('path');
const state = require(
path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/lib/state'));
const levelJson = require(
path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/levels/cloudinary_video/level.json'));

let resultString = "";
let answersValue = "";

levelJson.objectives.forEach(objective => {
    if (
      (objective.indexOf("m1") >= 0) 
      || (objective.indexOf("co") >= 0)
      || (objective.indexOf("va") >= 0)
    ) {
      //continue;
    } else {
      resultString += "<hr><h2>"+objective+"</h2>";
      answersValue = state.getAnswers(objective).value();
      for (const key in answersValue) {
        resultString += "<pre><code>" + answersValue[key] + "</code></pre>";
        resultString += `<button onclick='window.CloudinaryBrowser.showUrlExplorer("`+answersValue[key]+`");'>Load URL in Cloudinary Explorer</button><br>`
      }
    }
});

%>

# Cloudinary Vault

View all your answers from previous objectives below!

<div id="resultString"><%- resultString %></div>

