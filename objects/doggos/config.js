module.exports = {
  spriteSheets: {
    cloudinary_doggo1: {
      fileName: "doggy1.png",
      frameDimensions: {
        width: 25,
        height: 19,
      },
    },
  },
  animations: {
    idle: {
      frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      frameRate: 9,
    },
  },
  events:{
    onMapDidLoad:(self)=>{
      self.playAnimation("idle");
    }
  }

  // properties: {
  //   sprite: {
  //     defaultFrameIndex: 0,
  //     spriteSheet: "doggos",
  //     layers: [],
  //   },
  // },
};
