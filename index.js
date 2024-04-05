function cycle() {

        let gyroTilt = Math.random() * 360            //replace with real input
        const controlTilt = Math.random() * 10 - 10   //replace with real input
        let targetTilt = gyroTilt + controlTilt

        let gyroRoll = Math.random() * 360            //replace with real input
        const controlRoll = Math.random() * 10 - 10   //replace with real input
        let targetRoll = gyroRoll + controlRoll

        let gyroYaw = Math.random() * 360             //replace with real input
        const controlYaw = Math.random() * 10 - 10    //replace with real input
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
    
            targetTilt = 0
            gyroTilt = gyroTilt - targetTilt
        
            targetRoll = 0
            gyroRoll = gyroRoll - targetRoll
        
            targetYaw = 0
            gyroYaw = gyroYaw - targetYaw
        
            if(controlTilt < 0) {
                console.log("tilt down: ", controlTilt)
            } else if(controlTilt > 0) {
                console.log("tilt up: ", controlTilt)
            } else {
                console.log("on target tilt")
            }
        
            if(controlRoll < 0) {
                console.log("roll anti-clockwise: ", controlRoll)
            } else if(controlRoll > 0) {
                console.log("roll clockwise: ", controlRoll)
            } else {
                console.log("on target roll")
            }
        
            if(controlYaw < 0) {
                console.log("yaw left: ", controlYaw)
            } else if(controlYaw > 0) {
                console.log("yaw right: ", controlYaw)
            } else {
                console.log("on target yaw")
            }
        
            
    } const intervalId = setInterval(cycle, 1000)