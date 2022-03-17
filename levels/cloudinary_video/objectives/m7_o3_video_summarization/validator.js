const browser = require('../../../../lib/browser');
const Grader = require('../../../../lib/grader');
const state = require('../../../../lib/state');

module.exports = async function (helper) {
    state.saveAnswers(helper);

    let grader = new Grader(helper, {
        answer1: {
            validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/demo/docs/hotel.mp4',
            mustAppear: ['demo/docs/hotel.mp4','https:','res.cloudinary.com','video/upload'],
            mustAppearInOrder: [
            ]
        },
        answer2: {
          validExample: 'https://res.cloudinary.com/dwbnpn4z6/video/upload/e_preview:duration_25.0:max_seg_3:min_seg_dur_4.0/demo/docs/hotel.mp4',
          mustAppear: ['demo/docs/hotel.mp4','https:','res.cloudinary.com','video/upload','e_preview', 'duration_25.0', 'max_seg_3', 'min_seg_dur_4.0'],
          mustAppearInOrder: [
            ["upload", "e_preview"],
            ["e_preview", "demo"]
          ]
      }    
    }, function pass() {
        helper.success(grader.getSuccessMessage() + `
            Nice! You've created a video summarization of the hotel video!
        `);
        browser.display(
            `
                <div>
                    <h1>Success!</h1>
                    <div style="display: flex;flex-wrap: wrap;justify-content: space-evenly">
                        <div>
                            <div>
                                <center><h3> Original hotel video (full-length) </h3></center>
                                <video autoplay loop controls width=300px><source src="${grader.getVideoUrl('answer1')}" type="video/mp4" width=200></video>
                            </div>
                            <div>
                                <center><h3> Summarized hotel video (shorter) </h3></center>
                                <video autoplay loop controls width=300px><source src="${grader.getVideoUrl('answer2')}" type="video/mp4" width=200></video>
                            </div>
                        </div>
                    </div>
                </div>
                `
        );
    });

    grader.grade();

};