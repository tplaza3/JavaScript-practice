var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen<=4){
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    currentGen++;
}
for(currentGen = 5; currentGen <= totalGen; currentGen++){
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}

// Generator #1 is on, adding 62 MW, for a total of 62 MW!
// Generator #2 is on, adding 62 MW, for a total of 124 MW!
// Generator #3 is on, adding 62 MW, for a total of 186 MW!
// Generator #4 is on, adding 62 MW, for a total of 248 MW!
// Generator #5 is on, adding 124 MW, for a total of 372 MW!
// Generator #6 is on, adding 124 MW, for a total of 496 MW!
// Generator #7 is on, adding 124 MW, for a total of 620 MW!
// Generator #8 is on, adding 124 MW, for a total of 744 MW!
// Generator #9 is on, adding 124 MW, for a total of 868 MW!
// Generator #10 is on, adding 124 MW, for a total of 992 MW!
// Generator #11 is on, adding 124 MW, for a total of 1116 MW!
// Generator #12 is on, adding 124 MW, for a total of 1240 MW!
// Generator #13 is on, adding 124 MW, for a total of 1364 MW!
// Generator #14 is on, adding 124 MW, for a total of 1488 MW!
// Generator #15 is on, adding 124 MW, for a total of 1612 MW!
// Generator #16 is on, adding 124 MW, for a total of 1736 MW!
// Generator #17 is on, adding 124 MW, for a total of 1860 MW!
// Generator #18 is on, adding 124 MW, for a total of 1984 MW!
// Generator #19 is on, adding 124 MW, for a total of 2108 MW!



// Number2
// The people at the Hoover Dam have called you back, and would like a file that shows what happens when just the even numbered turbines are turned on. Furthermore, they want it all in just one for-loop. (They tend to micromanage.)
//
// With a set of complex conditional statements, construct a way inside the loop to only turn on even numbered turbines today. Remember our power output situation, too: generators 1-4 produce 62 MW and generators 5-19 produce 124 MW. The output format should be as follows:
//
// Generator #1 is off.
// Generator #2 is on, adding 62 MW, for a total of 62 MW!
// We’ve given you some starting variables to use in your build. Within your loop, consider the 3 possible scenarios when building your conditions:
//
// The Generator is off
// The Generator provides 62 MW of power
// The Generator provides 124 MW of power



var totalGen = 19;
var totalMW = 0;

for(var currentGen = 1; currentGen <= totalGen; currentGen++){
  if(currentGen %2 == 0 && currentGen <= 4){
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  }
  else if (currentGen <= 4) {
    console.log("Generator #" + currentGen + " is off.");
  }
  else if (currentGen % 2 == 0 && currentGen > 4){    // only (currentGen % 2 == 0) is needed, we already know >4
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }
  else if (currentGen > 4) {   // only else is needed, we have eliminated the other three cases already
    console.log("Generator #" + currentGen + " is off.");
  }
}


// Generator #1 is off.
// Generator #2 is on, adding 62 MW, for a total of 62 MW!
// Generator #3 is off.
// Generator #4 is on, adding 62 MW, for a total of 124 MW!
// Generator #5 is off.
// Generator #6 is on, adding 124 MW, for a total of 248 MW!
// Generator #7 is off.
// Generator #8 is on, adding 124 MW, for a total of 372 MW!
// Generator #9 is off.
// Generator #10 is on, adding 124 MW, for a total of 496 MW!
// Generator #11 is off.
// Generator #12 is on, adding 124 MW, for a total of 620 MW!
// Generator #13 is off.
// Generator #14 is on, adding 124 MW, for a total of 744 MW!
// Generator #15 is off.
// Generator #16 is on, adding 124 MW, for a total of 868 MW!
// Generator #17 is off.
// Generator #18 is on, adding 124 MW, for a total of 992 MW!
// Generator #19 is off.