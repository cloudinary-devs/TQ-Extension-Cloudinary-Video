
<%

const path = require('path');
const state = require(
path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/lib/state'));
const levelJson = require(
path.resolve(context.extensions.directory,
'TQ-Extension-Cloudinary-Video/levels/cloudinary_video/level.json'));
var levelObjectiveJson;

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
      levelObjectiveJson = require(path.resolve(context.extensions.directory,'TQ-Extension-Cloudinary-Video/levels/cloudinary_video/objectives/'+objective+'/objective.json'));
      resultString += "<hr><h2>"+levelObjectiveJson.title+"</h2><p>"+levelObjectiveJson.description+"</p>";
      answersValue = state.getAnswers(objective).value();
      for (const key in answersValue) {
        resultString += "<pre><code>" + answersValue[key] + "</code></pre>";
        if (answersValue[key].indexOf("res.cloudinary.com") >= 0) {
          resultString += `<button onclick='window.CloudinaryBrowser.showUrlExplorer("`+answersValue[key]+`");'>Load URL in Cloudinary Explorer</button><br>`;
        } else {
          resultString += "<br/>";
        }
      }
    }
});

%>

# Cloudinary Vault

View all your answers from previous objectives below!

<div id="resultString"><%- resultString %></div>

