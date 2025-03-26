//for relative controls, that means target is all previous controls added up

type Coordinates = [number, number, number]

let target:Coordinates = [0,0,0]

function cycle(): void {
    let gyro: Coordinates = getGyro()
    console.log("gyro: ", gyro)

    let control: Coordinates = getControl()
    console.log("control: ", control)

    target = [(target[0] + control[0]) % 1, (target[1] + control[1]) % 1, (target[2] + control[2]) % 1]
    console.log("target: ", target)

    let difference: Coordinates = [(target[0] - gyro[0]) % 1, (target[1] - gyro[1]) % 1, (target[2] - gyro[2]) % 1]
    console.log("difference: ", difference)

    console.log("_____");
    
}

function getGyro():Coordinates {
    return [Math.random(), Math.random(), Math.random()]
}

function getControl():Coordinates {
    return [Math.random(), Math.random(), Math.random()]
}

const intervalId = setInterval(cycle, 1000)