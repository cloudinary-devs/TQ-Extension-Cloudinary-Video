function viewpointHandler(world, viewpointName, conversationName, conversationAvatar) {
    world.forEachEntities(viewpointName, async (viewpoint) => {
        world.disablePlayerMovement();

        await world.tweenCameraToPosition({
        x: viewpoint.startX,
        y: viewpoint.startY,
        });
        await world.wait(1000);

        if (conversationName !== "none") {
            world.startConversation(conversationName, conversationAvatar);
        }

        await world.tweenCameraToPlayer();

        world.enablePlayerMovement();
    });
}

module.exports = {
    viewpointHandler
}