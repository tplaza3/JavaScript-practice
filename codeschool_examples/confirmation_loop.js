
// confirmation loop
if(parkIsOpen){
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}


// set userName
var userAge = prompt("What's your age, user?");

//confirm age

var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");


//while loop. make sure to sey age outside the loop. what is the !
var userAge = prompt("What's your age user?");
var ageIsCorrect = false;
while(!ageIsCorrect){
  if( confirm("You entered " + userAge + ". Is this correct?") ) {
    ageIsCorrect = true;
  } else {
    userAge = prompt("What's your age, user?");
  }    
}
alert("Great! Your age is logged as " + userAge + ".");