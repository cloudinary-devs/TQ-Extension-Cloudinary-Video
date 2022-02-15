/*
Not sure what this code does? Don't worry about it for now. Hit the "play"
button below to execute it. It will start a tiny web application running on
your computer that you can use to complete this challenge. The app will run
until you execute another program in the IDE, or quit TwilioQuest.
*/
const http = require('http');

const server = http.createServer((request, response) => {
  response.end(`
  <link href="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css" rel="stylesheet">
  <script src="https://unpkg.com/cloudinary-core@latest/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.js" 
      type="text/javascript"></script>

  <div style="max-width: px">
    <video id="doc-player"  controls  muted  class="cld-video-player cld-fluid"></video>
    </div>
  
  
  <script>
    var cld = cloudinary.Cloudinary.new({ cloud_name: 'demo' });
    var demoplayer = cld.videoPlayer('doc-player').width(600);
    demoplayer.source('race_road_car')
  </script>
  
  `);
});

const PORT = 8767;
server.listen(PORT, () => {
  console.log(`HTTP server listening on http://localhost:${PORT}/`);
  console.log(`Paste this URL into the hack UI to complete the challenge!`);
  console.log(`You can open this URL in your web browser too to test it out.`);
});