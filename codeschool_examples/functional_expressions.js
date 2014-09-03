// Changing Declarations to Expressions
//
// Inside the Haunted Hickory House file, developers for the Forest of Function Expressions Theme Park have created a declared function called forestFright. They’ve decided not to keep the function in memory, however, but instead only use it if fierce animals make their way into the HHH.
//
// Change the function to an anonymous function expression and assign it to a variable called runAway.

function forestFright(){
  var toAlert = "";
  for(var i = 0; i<5; i++){
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
}

//New

var runAway = function (){
  var toAlert = "";
  for(var i = 0; i<5; i++){
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

// Using Function Expressions with Parameters
//
// The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount of Fear generated at the DDD. (This is important to know if you are running a theme park, ya know). Their mystery formula is based on the amount of people at the Dogwoods, the current precipitation, and, as might be expected, the amount of sharks. Yes. Sharks.
//
// Here is their genius formula.
//
// var fearGenerated = function ( numPeeps, rainInInches, numSharks){
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
//   return totalFear;
// };
// The goal of the developers is to have the amount of Fear generated to be no more than 400, but no less than 100 (they’re running a business, for pity’s sake!).

// They’ve asked you to analyze the formula, and then assign values to the variables in hauntedHickoryHouse.js on the right, where the clickable entry space is. Additionally, they need you to then call the function expression on the next line, using your new values as parameters, and store the result in a variable called fear.

var people = 5;
var rain = 6;
var sharks = 6;
var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
var fear = fearGenerated(people, rain, sharks);
//Generates 5*6 + 6^3 = 246 FEAR. AGGGGH!!

//Periodically, the devs at the Haunted Hickory House need to be reminded of their own genius formula. They’d like you to find a way to alert the function’s formula to the screen, rather than just execute the function. In other words, they’d like to see the actual contents of the variable that stores their function. Over in hauntedHickoryHouse.js, write a line of code that handles their request. Below is the function expression assignment for reference.

var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};
