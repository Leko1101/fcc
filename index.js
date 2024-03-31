function calculateTargetTilt(gyroTilt, controlTilt) {
    return gyroTilt + controlTilt
}

function readGyroSensorTilt() {
    return Math.random() * 360 - 180
}

function readControlInputTilt() {
    return Math.random() * 360 - 180
}

function cycle() {
    let gyroTilt = readGyroSensorTilt()
    let controlTilt = readControlInputTilt()
    
    console.log("gyroTilt: ", gyroTilt);
    console.log("controlTilt: ", controlTilt);
    
    const targetTilt = calculateTargetTilt(gyroTilt, controlTilt)
    console.log("targetTilt: ", targetTilt)
}
cycle()