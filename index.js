function cycle() {
    
    const gyro = getGyro()
    console.log("Gyro: ", gyro);

    const target = getTarget()
    console.log("Target: ", target);

    const steering = [target[0] - gyro[0], target[1] - gyro[1], target[2] - gyro[2]]
    console.log("Steering :", steering);
}

function getGyro() {
    return [Math.random() * 360, Math.random() * 360, Math.random() * 360]
}

function getTarget() {
    return [Math.random() * 360, Math.random() * 360, Math.random() * 360]
}
const intervalId = setInterval(cycle, 1000)