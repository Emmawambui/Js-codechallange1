//Speed Detector Challange

const speedLimit = 70
const kmPerSpeedDemiritPoints = 5
const maxSpeedLimitDemeritPoints = 12
const demiritPoints = ((speed-speedLimit)/kmPerSpeedDemiritPoints)

let speed = 80
if (speed < speedLimit){
    console.log('OK');
}else if( speed <= maxSpeedLimitDemeritPoints){
    console.log('demeritsPoints');
}else ( speed =>maxSpeedLimitDemeritPoints);{
    console.log('License suspended');
}

console.log(speed = 80)


