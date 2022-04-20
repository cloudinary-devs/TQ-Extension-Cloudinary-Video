// const jQuery = require('jquery');
const levelJson = require("./level.json");

console.log('Cloudinary Level Select Mission Started (event.js loaded)');

async function worldWaitHelper(world, seconds) {
    world.disablePlayerMovement();
    await world.wait(seconds);
    world.startConversation("level-select", "cedricNeutral.png");
}

const DEFAULT_MISSION_STATE = {
    levelSelected : false,
    level : "null"
}
    

module.exports = function (event, world) {

    var worldState = DEFAULT_MISSION_STATE;
    world.setState('com.cloudinary.cloudinary', worldState);

    /**
     * Main Extension/'Level' logic
     */
    switch (event.name) {

        case 'levelDidLoad':
            worldWaitHelper(world, 4000);
            break;
        case 'conversationDidEnd':
            if (!worldState.levelSelected) {
                world.warp("fog_owl","player_entry1","default");
            } else {
                var level = worldState.level;
                worldState.levelSelected = false;
                worldState.level = "null";
                world.warp(level,"player_entry1","default");
            }
            break;
        default:
            console.warn(`Cloudinary received unknown event named "${event.name}"`,);
    }

    world.setState('com.cloudinary.cloudinary', worldState);
}