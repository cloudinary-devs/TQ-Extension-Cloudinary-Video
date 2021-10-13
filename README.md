# Cloudinary Video - TwilioQuest Extension

## How to Start Playing

1. Download TwilioQuest https://www.twilio.com/quest/download
2. Select TQ 3.2 Preview on the latest alpha version (As of mid October 2021, you will use the current live version)
3. Create folder on your local computer called **TwilioQuest-Extensions** (You can also find the rest of the instructions on installing an Extension here: https://github.com/TwilioQuest/twilioquest-extension-template)
4. In your CLI, cd into TwilioQuest-Extensions folder
5. Clone this repository (You should be able to see it as TwilioQuest-Extensions->TQ-Extension-Cloudinary-Video) for the 2 directories
6. cd into TQ-Extension-Cloudinary-Video and do an **npm install**
7. Open TwilioQuest and click on **PLAY TWILIOQUEST**
8. Go to the game's Settings by either typing the number **3** or clicking the 3 lines at the top of the middle screen.
9. Click on **Extensions** and click on "Choose Directory* and select "TwilioQuest-Extensions" folder, which will load all of your extensions that you have in that folder.
10. Scroll down to see a green message saying "loaded" next to the extension.
11. Go back to the Fog Owl room and find the green area to access the Terminal
12. Click on the Terminal and select "Cloudinary Video" and you'll be in the custom game!

## Extension Completion

|  | Status |
| --- | --- |
|Mission 1|First Draft Complete|
|Mission 2|First Draft Complete|
|Mission 3|First Draft Complete|
|Mission 4|First Draft Complete|
|Mission 5|In Progress (Objectives 1,2 of 4 complete)|
|Mission 6|Not Started (Objectives 1,2)|
|Mission 7|Not Started (Objectives 1,2,3)|
|Mission 8|Not Started (Objectives 1,2,3)|


### Internal
2. Fredric is now officially an antagonist...need to remove them or repurpose.
3. Need to add a special gravity/cropping focused lesson so that we can show off the special features like faces and auto.
   1. https://cloudinary.com/documentation/video_manipulation_and_delivery#automatic_cropping
### Help from TwilioQuest
3. Need a way to reference local images/scripts/css in objectives/dialogs/browser.
4. Need access to world state, extension state via helper in validator
5. Style of code blocks in the markup is restricted to javascript.

## Todo List - Joel
2. When returning to main corridor, greeter should not appear if all objectives have been completed.
3. "Thanks, would you like to show/complete/do it again" conversation should play when talking to greeter/npc inside their office if all objectives have been completed.
4. Save hack answers into game state- so that our default values loader can populate them. NOT POSSIBLE CURRENTLY
5. Integrate new doors and signs tilesets
6. Simplify m4_o2 by using cloudinary logo from sample assets in their account instead of uploading file 
7. Lock m5_04 until m5_03 has been successfully completed.

## Todo List - Tessa
1. Update story for second office room
2. Speak with legal dept and see if we need a copyright on any Cloudinary logo/code/content mentioned
3. Add details about gravity by coordinates in m3_o2

## Refinement and Final Pass Todo List
1. Check experience awards for each objective
2. Review pacing of lessons
3. Review and update objective descriptions
4. Replace office banners with sign plates (and add pop up information for inspection)
5. Replace doorways with new graphics
    1. Integrate new doors and signs tilesets
6. Validation testing, such as ensuring they use their cloudname for each URL (ex in m2 o2 isn't working)
7. Make sure all _param_ references in walkthrough.md and description.md are also links to documentation

## Needs List
1. Graphic Assets
    4. Improved office exists...top bar to pass under
      
1. Conversations

## Standards
1. Conversations naming: <mission>-<actor>-<event/conversation>


## External Assets

### In Use
1. https://res.cloudinary.com/demo/video/upload/dog.mp4
2. https://res.cloudinary.com/demo/video/upload/kitten_fighting.mp4
1. https://res.cloudinary.com/demo/video/upload/transition1.mp4 

### Potential Demo Account Assets
1. https://res.cloudinary.com/demo/video/upload/docs/g_auto_demo.webm
1. https://res.cloudinary.com/demo/video/upload/ship.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/Roller_Coaster.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/walking_talking.webm
1. https://res.cloudinary.com/demo/video/upload/dog_orig_qflwce.webm
1. https://res.cloudinary.com/demo/video/upload/pencil_sketch.mp4
1. https://res.cloudinary.com/demo/video/upload/snow_deer.mp4
1. https://res.cloudinary.com/demo/video/upload/ski_jump.mp4
1. https://demo-res.cloudinary.com/video/upload/v1/docs/bluescreen_watches.webm
1. https://res.cloudinary.com/demo/video/upload/docs/transparent_talking.webm
1. https://res.cloudinary.com/demo/video/upload/v1/docs/transparent_girl.webm
1. https://res.cloudinary.com/demo/video/upload/elephants.mp4
1. https://res.cloudinary.com/demo/video/upload/hourglass_timer.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/shoppable_demo.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/house2.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/hotel.mp4
1. https://res.cloudinary.com/demo/video/upload/docs/animated_hearts.webm
1. https://res.cloudinary.com/demo/video/upload/docs/talking_head_travel.mp4
