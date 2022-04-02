// const jQuery = require('jquery');
const inject = require('../../lib/injector');
const observer = require('../../lib/conversationObserver');
const keyHandler = require('../../lib/keyboardHandler');
const browser = require('../../lib/browser');
// const state = require('../../lib/state');
const setHackFormDefaults = require('../../lib/hackFormDefaultValues');
const levelJson = require("./level.json");
const { getObjectivesListOnMapLoad, arrowEventHandler, areMissionObjectivesComplete } = require("../../lib/objectiveEventHandler");
const { viewpointHandler } = require("../../lib/viewpointHandler"); 

var objectivesList;

const DEFAULT_MISSION_STATE = {
    startedInteractingWithKeren: false,
    finishedInteractingWithKeren: false,
    interactedWithFredrick: false,
    interactedWithGaryInOffice: false,
    missionsCompleted: {
        m2_complete: false,
        m3_complete: false,
        m4_complete: false,
        m5_complete: false,
        m6_complete: false,
        m7_complete: false
        //skip: false // open all gates debug flag
    },
    interactableState: {
        current: "",
        interactable: false
    }
}

console.log('Cloudinary Video Mission Started (event.js loaded)');

module.exports = function (event, world) {

    //Load world state
    let worldState = world.getState("com.cloudinary.cloudinary_video_adventures") || DEFAULT_MISSION_STATE;

    //Define objective list in global scope
    //let objectivesList;

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
                //console.log(objective);
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
            && !worldState.startedInteractingWithKeren) {
                worldState.startedInteractingWithKeren = true;
                world.startConversation("corridor-keren", "keren.png");
                // When the above conversation ends, trigger conversationDidEnd
            }

            if (event.mapName.indexOf("m2_asset_mgmt") >= 0 
            && !worldState.interactedWithGaryInOffice) {
                worldState.interactedWithGaryInOffice = true;
                world.startConversation("m2-gary", "ryanNeutral.png");
            }

            //Run the arrow event handler once to set the objective arrows on the map
            objectivesList = getObjectivesListOnMapLoad(world, event, levelJson.objectives);
            console.log(objectivesList);
            arrowEventHandler(world, event, objectivesList);

            //Show map-specific pop-up to show what the mission topic is in an office
            var missionMessage;
            switch (event.mapName) {
                case "default":
                    //missionMessage = "Onboarding";
                    break;
                case "main_corridor":
                    //missionMessage = "Main Corridor";
                    break;
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
                case "m6_audio":
                    missionMessage = "Office 6: Audio";
                    break;
                case "m7_output_embedding":
                    missionMessage = "Office 7: Output Embedding";
                    break;
                case "m8_advanced":
                    missionMessage = "Office 8: Advanced";
                    break;
            }
            !missionMessage ? "" : world.showNotification(missionMessage, 500);
           
            var openAllGatesDebugFlag;
            console.log(world.__internals.level.player.keys);
            
            // Debug: if you hold the ctrl key while walking through the door,
            //        trigger the down key
            openAllGatesDebugFlag = false;//world.__internals.level.player.keys.down.isDown;

            // Handle mission complete
            const officesKeys = ["m2_","m3_","m4_","m5_", "m6_"];
            officesKeys.forEach(function (key) {
                    if (
                        (openAllGatesDebugFlag) || 
                        (areMissionObjectivesComplete(world, levelJson.objectives, key))
                        ) {
                        world.hideEntities(key+"gate");
                    }
            });

            // Reset interactable state
            worldState.interactableState.interactable = false;

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
        case 'objectiveCompleted':
        case 'objectiveCompletedAgain' :
            //Run the arrow event handler
            arrowEventHandler(world, event, objectivesList);
            break;
        case 'objectiveFailed':
            break;
        case 'objectiveDidClose':
            /*if (areMissionObjectivesComplete(world, objectivesList, event.objectiveName)) {
                world.showNotification("Pass");
            }*/
            break;
        case 'conversationDidEnd':
            //@todo-p2 refactor into a generic call to objectives/<objective_name>/event.js:conversationDidEnd() call?
            console.table(observer.history);
            switch (event.npc.conversation) {
                case 'm2-cedric-Default':
                    break;
                case 'corridor-keren':
                    if (worldState.startedInteractingWithKeren && !worldState.finishedInteractingWithKeren) {
                        worldState.finishedInteractingWithKeren = true;
                        viewpointHandler(world, "first_mission_viewpoint", "cedricCorridor", "cedricNeutral.png");
                    }
                    break;

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
                    case 'toLowerArea':
                        //moving to main corridor
                        console.log(world.__internals.level.player.keys)
                        if(
                            world.__internals.level.player.keys.down.isDown ||
                            world.__internals.level.player.keys.s.isDown
                            ) {
                            world.showNotification('Looks like the main corridor is straight down from here!');
                        }
                        break;
                }
            } else if (event.target.name === "interactable" && event.target.interactableName) {
                worldState.interactableState.current = event.target.interactableName;
                worldState.interactableState.interactable = true;
            }
            console.log({triggerAreaTarget: event.target});
            break;
        case 'triggerAreaWasExited':
            if (event.target.name === "interactable") {
                worldState.interactableState.interactable = false;
            }
            browser.hide();
            break;
        case 'playerDidInteract':
            //Is the player starting a conversation with one of our custom objects?
            if (event.target.conversation && event.target.type.startsWith('cloudinary')) {
                //start the conversation
                world.startConversation(event.target.conversation, event.target.conversationAvatar);
            }
            else if (worldState.interactableState.interactable) {
                console.log(worldState.interactableState.currentinteractable);
                var interactableMessage;
                switch (worldState.interactableState.current) {
                    case "chalkboard1":
                        interactableMessage = "Wow, I can't believe people use to draw images on chalkboards instead of video screens!";
                        break;
                    case "computer1":
                        interactableMessage = "This computer is so square. Do people code on a 4:3 aspect ratio?";
                        break;
                    case "computer2":
                        interactableMessage = "Two monitors, two keyboards? The power of technology is staggering!";
                        break;
                    case "diningtable":
                        interactableMessage = "Cloudinary's serving up some tasty food today in the delivery network!";
                        break;
                    case "cloudinarytrees":
                        interactableMessage = "Clouds grow on trees...?";
                        break;
                    case "tocloudinaryvault":
                        interactableMessage = "I need to solve mission 3 first before accessing the vault below.";
                        break;
                    default:
                        interactableMessage = worldState.interactableState.current;
                        break;
                }
                world.showNotification(interactableMessage, "0");
            }
            break;
        case 'levelWillUnload':
            //cleanly stop our conversation eavesdropper
            observer.stop();
            break;
        default:
            console.warn(`Cloudinary received unknown event named "${event.name}"`,);
    }

    world.setState("com.cloudinary.cloudinary_video_adventures", worldState);

}