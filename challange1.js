//title = Student Grade Generator

function promptUserForGrade(Grade){
    

    if(Grade>=0 && Grade<=100){
        if(Grade >79){
            console.log('A');
          }else if(Grade >=60 && Grade <= 79){
            console.log('B');
          }else if (Grade >=59 && Grade <=50){
            console.log('C');
          }else if (Grade >=40 && Grade <=49){
            console.log('D');
          }else {console.log('E')}
  
    }else{
      console.log ('invalid Grade');
    } 
}
let Grade = prompt("Key in the Student Grade");
let grade = parseInt(Grade)
promptUserForGrade(Grade)
console.log (promptUserForGrade(Grade))

