function cycle() {
    inputCycle()
    calculationCycle()
}
const intervalId = setInterval(cycle, 1000)

function inputCycle() {

    let gyroTilt = Math.random() * 360            //replace with real input
    const controlTilt = Math.random() * 360       //replace with real input
    let targetTilt = gyroTilt + controlTilt

    let gyroRoll = Math.random() * 360            //replace with real input
    const controlRoll = Math.random() * 360       //replace with real input
    let targetRoll = gyroRoll + controlRoll

    let gyroYaw = Math.random() * 360             //replace with real input
    const controlYaw = Math.random() * 360        //replace with real input
    let targetYaw  = gyroYaw  + controlYaw


    console.log("gyroTilt: ", gyroTilt)             //for data
    console.log("controlTilt: ", controlTilt)       //for data
    console.log("targetTilt: ", targetTilt)         //for data

    console.log("gyroRoll: ",gyroRoll)              //for data
    console.log("controlRoll: ", controlRoll)      //for data
    console.log("targetRoll: ", targetRoll)         //for data

    console.log("gyroYaw: ", gyroYaw)               //for data
    console.log("controlYaw:", controlYaw)          //for data
    console.log("targetYaw: ", targetYaw)           //for data

    }
function calculationCycle(gyroRoll, gyroTilt, gyroYaw,
     controlRoll, controlTilt, controlYaw, targetRoll, targetTilt, targetTilt) {
        

        targetTilt = 0
        gyroTilt = gyroTilt - targetTilt
    
        targetRoll = 0
        gyroRoll = gyroRoll - targetRoll
    
        targetYaw = 0
        gyroYaw = gyroYaw - targetYaw
    
        if(targetTilt < gyroTilt) {
            console.log("tilt down: ", gyroTilt - targetTilt)
        } else if(targetTilt > gyroTilt) {
            console.log("tilt up: ", gyroTilt - targetTilt)
        } else {
            console.log("on target tilt")
        }
    
        if(targetRoll < gyroRoll) {
            console.log("roll clockwise: ", gyroRoll - targetRoll)
        } else if(targetRoll > gyroRoll) {
            console.log("roll anti-clockwise: ", gyroRoll - targetRoll)
        } else {
            console.log("on target roll")
        }
    
        if(targetYaw < gyroYaw) {
            console.log("yaw left: ", gyroYaw - targetYaw)
        } else if(targetYaw > gyroYaw) {
            console.log("yaw right: ", gyroYaw - targetYaw)
        } else {
            console.log("on target yaw")
        }
    
        }