module.exports = (key) => {


    return {
        spriteSheets: {
            [`cloudinary_${key}`]: {
                fileName: `${key}.png`,
                frameDimensions: {
                    width: 25,
                    height: 19,
                },
            },
        },
        animations: {
            full: {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
                frameRate: 9,
            },
            idle: {
                frames:[18],
                frameRate:0.1
            },
            jump: {
                frames: [7, 8],
                frameRate: 2,
            }
        },
        // events: {
        //     // onMapDidLoad: (self) => {
        //     //     // self.playAnimation("idle",true);
        //     // }
        // },

        properties: {
            sprite: {
                defaultFrameIndex: 0,
                spriteSheet: `cloudinary_${key}`,
                layers: [],
            },
            idleAnimations: { //https://twilioquest.github.io/extension-docs/api/custom_objects.html#object-configuration-file
                animations: {
                    full:25,
                    jump:25,
                    idle:50
                },
                minIdleTime: 1000,// every period
                maxIdleTime: 5000
            }
        }
    };
}