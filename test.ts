type Coordinates = any //change type
let target:Coordinates = [0,0,0]

function cycle(): void {
    let gyro: Coordinates = getGyro()
    console.log(gyro)

    let control: Coordinates = getControl()
    console.log(control)

    target = [target[0] + control[0], target[1] + control[1], target[2] + control[2]]
    console.log(target)

    let difference: Coordinates = [target[0] - gyro[0], target[1] - gyro[1], target[2] - gyro[2]]
    console.log(difference)
}

function getGyro():Coordinates {
    return [Math.random, Math.random, Math.random]
}

function getControl():Coordinates {
    return [Math.random, Math.random, Math.random]
}

const intervalId = setInterval(cycle, 1000)