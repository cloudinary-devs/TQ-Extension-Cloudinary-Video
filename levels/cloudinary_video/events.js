// const jQuery = require('jquery');
const inject = require('../../lib/injector');
const observer = require('../../lib/conversationObserver');
const keyHandler = require('../../lib/keyboardHandler');
const browser = require('../../lib/browser');
// const state = require('../../lib/state');
const setHackFormDefaults = require('../../lib/hackFormDefaultValues');
const levelJson = require("./level.json");
const { getObjectivesListOnMapLoad, arrowEventHandler } = require("../../lib/arrowEventHandler");

var objectivesList;

const DEFAULT_MISSION_STATE = {
    interactedWithKeren: false,
    interactedWithFredrick: false 
}

console.log('Cloudinary Video Mission Started (event.js loaded)');

module.exports = function (event, world) {

    //Load world state
    let worldState = world.getState("com.cloudinary.cloudinary_video_adventures") || DEFAULT_MISSION_STATE;

    /**
     * Some dev mode stuff
     */
    //if (process.env.USER === 'jsimpson') { //replace with your username or another dev mode flag
    if (true) { // Debug mode on
        if (event.name === 'levelDidLoad') {
            //Set javascript sources to be reloaded instead of cached
            window.reloadExternalModules = true;
            worldState = DEFAULT_MISSION_STATE;
            console.clear(); //clear out all the platform errors/warnings that occur at startup
            console.log("Reset completed objectives:");
            levelJson.objectives.forEach (objective => {
            if (world.isObjectiveCompleted(objective)) {
                console.log(objective);
                world.removeObjective("cloudinary_video", objective);
            
      }
    })
        }
        //log all events in dev mode
        console.debug({event, world});
    }

    

    //CAN HAZ HAX PLZ?
    window.world = world;

    /**
     * Main Extension/'Level' logic
     */
    switch (event.name) {

        case 'levelDidLoad':
            //Introduce the player to the cloudinary ship via Fredrica
            world.startConversation("m2-fredric_holo-wakeup", "fredricNeutral.png");

            break;

        case 'mapDidLoad':

            //Start our conversation eavesdropper
            observer.start();

            //Inject our custom css for the file browser, sign posts and other functionality
            inject.css('cloudinary.css');

            //Start handler for triggering our special features
            (new keyHandler(world,browser)).start();

            //Map-specific conversation starters
            if (event.mapName.indexOf("main_corridor") >= 0
            && !worldState.interactedWithKeren) {
                worldState.interactedWithKeren = true;
                world.startConversation("corridor-keren", "keren.png");
            }

            //Run the arrow event handler once to set the objective arrows on the map
            objectivesList = getObjectivesListOnMapLoad(world, event, levelJson.objectives);
            console.log(objectivesList);
            arrowEventHandler(world, event, objectivesList);

            //Show map-specific pop-up to show what the mission topic is in an office
            var missionMessage;
            switch (event.mapName) {
                case "m2_asset_mgmt":
                    missionMessage = "Office 2: Asset Management";
                    break;
                case "m3_basic_operations":
                    missionMessage = "Office 3: Basic Operations";
                    break;
                case "m4_annotation":
                    missionMessage = "Office 4: Annotations";
                    break;
                case "m5_editing":
                    missionMessage = "Office 5: Editing";
                    break;
            }
            !missionMessage ? "" : world.showNotification(missionMessage);
           break;

        case 'objectiveDidOpen' :
            //@todo-p2 refactor into a generic call to objectives/<objective_name>/event.js:objectiveDidOpen() call?
            switch (event.target.objectiveName) {
                case 'm1_o2_sign_up':
                    //Re-enter player's information if we have already saved it
                    let env = world.getContext().env;
                    setHackFormDefaults([
                        env.TQ_CLOUDINARY_CLOUD_NAME ? env.TQ_CLOUDINARY_CLOUD_NAME.value : null,
                        env.TQ_CLOUDINARY_API_KEY ? env.TQ_CLOUDINARY_API_KEY.value : null,
                        env.TQ_CLOUDINARY_API_SECRET ? env.TQ_CLOUDINARY_API_SECRET.value : null,
                    ]);

                    break;
                case 'm5_o4_transitions':
                    //commenting out, because we can put the url into the objective for reference...left here as example
                    //setHackFormDefaults([state.getAnswers('m5_o3_combining_clips').value().answer3,'','']);
                    break;
            }
            break;
        case 'objectiveDidClose':
            break;
        case 'objectiveCompleted':
        case 'objectiveCompletedAgain' :
            //Run the arrow event handler
            arrowEventHandler(world, event, objectivesList);
            break;
        case 'objectiveFailed':
            break;
        case 'conversationDidEnd':
            //@todo-p2 refactor into a generic call to objectives/<objective_name>/event.js:conversationDidEnd() call?
            console.table(observer.history);
            switch (event.npc.conversation) {
                case 'm2-cedric-Default':

            }
            observer.history = [];//clear out the history?
            break;

        case 'triggerAreaWasEntered':
            if(event.target.observation){
                switch(event.target.observation){
                    case 'leaving':
                        //and moving towards the exit
                        console.log(world.__internals.level.player.keys)
                        if(
                            world.__internals.level.player.keys.left.isDown ||
                            world.__internals.level.player.keys.a.isDown
                            ) {
                            world.showNotification('This exit will take you out of the Cloudinary Video Adventure and back to the Fog Owl.');
                        }
                        break;
                }
            }

            console.log({triggerAreaTarget: event.target});
            break;
        case 'playerDidInteract':
            //Is the player starting a conversation with one of our custom objects?
            if (event.target.conversation && event.target.type.startsWith('cloudinary')) {
                //start the conversation
                world.startConversation(event.target.conversation, event.target.conversationAvatar);
            }
            break;
        case 'levelWillUnload':
            //cleanly stop our conversation eavesdropper
            //observer.stop();
            break;
        case 'triggerAreaWasExited':
            browser.hide();
            break;

        default:
            console.warn(`Cloudinary received unknown event named "${event.name}"`,);
    }

    world.setState("com.cloudinary.cloudinary_video_adventures", worldState);

}