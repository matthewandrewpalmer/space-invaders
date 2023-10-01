var Config = {
    speed: 10,
    maxEnemies: 600,
    maxLives: 600,
    score: 200,
    keys: {
        pause: 112,
        shoot: 32,
        left: 65,
        leftArrow: 37,
        right: 68,
        rightArrow: 39
    },
    player: {
        height: 50,
        width: 1,
        speed: 20,
        bulletSpeed: 100,
        shootSpeed: 100,
        colour: "Pink"
    },
    bullet: {
        height: 20,
        width: 20  ,
        speed: 20,
        colour: "Red"
    },
    enemy: {
        width: 60,
        height: 20,
        bulletSpeed: 8,
        shootSpeed: 30,
        speedUpperLimit: 8,
        speedLowerLimit: 2,
        spawnTimeout: 10
    }
};
