//Speed Detector Challange

// const speedLimit = 70
// const kmPerSpeedDemiritPoints = 5
// const maxSpeedLimitDemeritPoints = 12
// let demeiritPoints

function speedDetector(speed) {

    if (speed <= 70) {
        return "Ok";

    } else {
        let demeiritPoints = speed - 70
        demeiritPoints = demeiritPoints / 5
        if( demeiritPoints >= 12){
            return 'License suspended';
       }else {
        return  "Points: " + demeiritPoints
       }
    }
}
// const speed = parseInt('90')
// speedDetector(75)
console.log(speedDetector(80));

