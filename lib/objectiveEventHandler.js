const { map } = require("jquery");

function getObjectivesListOnMapLoad(world, event, objectivesList) {
    if (["mapDidLoad"].includes(event.name)) {
        var mapName = event.mapName;
        return objectivesListHelper(objectivesList, mapName);
    } else {
        console.log("This function must be run with the mapDidLoad event.");
        return [];
    }
}

function objectivesListHelper(objectivesList, mapName) {
    switch (mapName) {
        case "default":
            mapName = "m1_";
            break;
        case "main_corridor":
            mapName = "co_";
            break;
    }
    //console.log(objectivesList);
    var mapSpecificObjectiveList = objectivesList.filter(function (objective) {
        return objective.includes(mapName.split("_")[0]+"_");
    })
    if (mapSpecificObjectiveList.length === 0) {
        console.log("No objectives in this room that match the prefix: " + mapName.slice(0,2));
    }
    return mapSpecificObjectiveList;
}

function areMissionObjectivesComplete(world, objectivesList, key) {
    //console.log(objectivesList);
    //console.log(key);
    var complete = true;
    objectivesListHelper(objectivesList, key).forEach(function (objective) {
        //console.log(objective);
        if (!world.isObjectiveCompleted(objective)) {
            complete = false;
            return;
        }
    });
    return complete;
}

function arrowEventHandler(world, event, objectivesList) {
    // if (!["objectiveCompleted"].includes(event.name)) {
    //     console.log("This function must be run with the objectiveCompleted events.");
    //     return;
    // }
    var isObjectiveArrowVisible;
    objectivesList.forEach (objective => {
        if (world.isObjectiveCompleted(objective) || isObjectiveArrowVisible) {
            world.hideEntities("arrow_"+objective);
        } else {
            isObjectiveArrowVisible = true;
            world.showEntities("arrow_"+objective);
            console.log("Objective arrow updated to "+"arrow_"+objective);
        }
    });
}


module.exports = {
    arrowEventHandler,
    getObjectivesListOnMapLoad,
    areMissionObjectivesComplete
};