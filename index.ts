type Coordinates = [number, number, number]

let target: Coordinates = [0, 0, 0]

function cycle() {
    
    const gyro = getGyro()
    console.log("Gyro: ", gyro);

    const newControl = getControl()
    console.log("Control: ", newControl);

    target = [(target[0] + newControl[0]) % 360, (target[1] + newControl[1]) % 360, (target[2] + newControl[2]) % 360]
    console.log("Target: ", target);

    const steering = [target[0] - gyro[0], target[1] - gyro[1], target[2] - gyro[2]]
    console.log("Steering :", steering);
}

function getGyro(): Coordinates {
    return [Math.random() * 360, Math.random() * 360, Math.random() * 360]
}

function getControl(): Coordinates {
    return [Math.random() * 360, Math.random() * 360, Math.random() * 360]
}

const intervalId = setInterval(cycle, 1000)