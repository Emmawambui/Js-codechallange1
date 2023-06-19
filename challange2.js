//Speed Detector Challange

const speedLimit = 70
const kmPerSpeedDemiritPoints = 5
const maxSpeedLimitDemeritPoints = 12
 let demeiritPoints  

function speedDetector(speed){

if (speed <= speedLimit){
    console.log('OK');
    // speed > speedLimit

}else if(speed > speedLimit ){
    demeiritPoints = (speed-speedLimit) / kmPerSpeedDemiritPoints
    
    console.log(demeiritPoints);
}else if( demeiritPoints > maxSpeedLimitDemeritPoints);{
    console.log('License suspended');
}
}
// const speed = parseInt('90')
// speedDetector(75)
console.log(speedDetector(80));

 