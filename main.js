let name;

function leapYear(n){
  if (n % 4 === 0){
     if(n % 100 === 0){
       if(n % 400 === 0){
         name = "Leap Year";
       }
     } else{
       name = "a leap year";
     }
  } else{
    name = "not a leap Year";
  }
 alert("This is " + name); 
}

let numForLeapYear = Number(prompt("Enter a number: "));
leapYear(numForLeapYear);