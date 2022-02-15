const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: '',
            mustAppear: ['demo']
        }       
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice!
        `);
        browser.display(
            `                
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
            `
        );
    });

    grader.grade();

};