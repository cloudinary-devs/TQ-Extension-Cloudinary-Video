
function getObjectivesListOnMapLoad(world, event, objectivesList) {
    if (["mapDidLoad"].includes(event.name)) {
        var mapName = event.mapName;
        switch (mapName) {
            case "default":
                mapName = "m1_";
                break;
            case "main_corridor":
                mapName = "none";
                break;
        }
        var mapSpecificObjectiveList = objectivesList.filter(function (objective) {
            return objective.includes(mapName.slice(0,2));
        })
        if (mapSpecificObjectiveList.length === 0) {
            console.log("No objectives in this room that match the prefix: " + event.mapName.slice(0,2));
        }
        return mapSpecificObjectiveList;
    } else {
        console.log("This function must be run with the mapDidLoad event.");
        return [];
    }
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
        }
    });
    //objectivesList.forEach(object)
    // objectiveIndex = objectivesList.indexOf(event.objective);
    // objectiveIndex++;
    // if (objectiveIndex > objectivesList.length) {
    //     console.log("No other objectives to set flags on");
    // } else {
    //     world.showEntities(objectivesList[objectiveIndex]);
    // };
}


module.exports = {
    arrowEventHandler,
    getObjectivesListOnMapLoad
};