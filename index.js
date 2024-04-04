function calculationCycle() {

let gyroTilt = Math.random() * 360          //replace with real input
let controlTilt = Math.random() * 360       //replace with real input

let gyroRoll = Math.random() * 360          //replace with real input
let controlRoll = Math.random() * 360       //replace with real input

let gyroYaw = Math.random() * 360           //replace with real input
let controlYaw = Math.random() * 360        //replace with real input


console.log("gyroTilt: ", gyroTilt)             //for data
console.log("controlTilt: ", controlTilt)       //for data

console.log("gyroRoll: ",gyroRoll)              //for data
console.log("controllRoll: ", controlRoll)      //for data

console.log("gyroYaw: ", gyroYaw)               //for data
console.log("controlYaw:", controlYaw)          //for data


if(controlTilt < gyroTilt) {                    //replace with real outputs, 2d object to the right angle ccw
    console.log("tilt down ", controlTilt - gyroTilt)
} else if(controlTilt > gyroTilt) {             
    console.log("tilt up ", controlTilt - gyroTilt)
} else {
    console.log("on targeted tilt")
}

if(controlRoll < gyroRoll) {                    //replace with real outputs, angles counted ccw
    console.log("roll clockwise ", controlRoll - gyroRoll)
} else if(controlRoll > gyroRoll) {
    console.log("roll anti-clockwise ", controlRoll - gyroRoll)
} else {
    console.log("on targeted roll")
}

if(controlYaw < gyroYaw) {                      //replace with real outputs, angles counted ccw
    console.log("yaw right ", controlYaw - gyroYaw)
} else if(controlYaw > gyroYaw) {
    console.log("yaw left ", controlYaw - gyroYaw)
} else {
    console.log("on targeted yaw")
}


gyroYaw = 0                         //has to reset real gyro outputs for implementations
gyroTilt = 0                        //has to reset real gyro outputs for implementations
gyroRoll = 0                        //has to reset real gyro outputs for implementations
}
const intervalId = setInterval(calculationCycle, 1000)