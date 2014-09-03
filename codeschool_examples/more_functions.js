// //Problem Solving with Functions I
//
// The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population.
//
// They need a function written for their ranger website, call it feedPerRanger, that takes in
//
// (1) the current population of sheep and (2) the amount of park rangers available during the day, and then alerts to the screen the amount of feed each park ranger should be responsible for on that day to the screen. This will allow the rangers to load their official Big-Ass Ranger Trucks (BARTs) appropriately.
//
// Each sheep needs 2 lbs of Ranger-provided food per day (in addition to the sparse plantlife it munches). Build out the function declaration feedPerRanger to the right. The function’s output should match the following format:
//


function feedPerRanger (population, rangers) {
  var numLbsNeeded = population *2;
  var feedPerRanger = numLbsNeeded/rangers;
  alert("Each Park Ranger should load " + feedPerRanger + " lb(s) of feed into his/her BART today.");
  return;
}


// //Problem Solving with Functions II
//
// Back at the Hoover Dam, the technicians are fed up with the all-or-nothing generator switch technique (ANGST). They have decided they want significantly more control of which generators are on and off. So, they’ve asked you to develop a way to adjust the total generated Megawatts upon the switch-on or switch-off of a single, chosen generator.
//
// Build a function declaration named changePowerTotal that takes in:
//
// The total current power generated (a number)
// A generator ID (a number)
// The new status of a generator (a string that says “on” or “off”)
// And the amount of power produced by that generator (a number)
// Your function should:
//
// return the new total of generated power
// alert the technician in the following formats
// For switching on:
//
// Generator #2 is now on, adding 62 MW, for a total of 62 MW!
// Or for switching off:
//
// Generator #2 is now off, removing 62 MW, for a total of 0 MW!


function changePowerTotal (total, ID, status, power) {
  if(status == "on"){
    total += power;
    alert("Generator #" + ID + " is now on, adding " + power + " MW, for a total of " + total + " MW!");
  } else if (status == "off"){
    total -= power;
    alert("Generator #" + ID + " is now off, removing " + power + " MW, for a total of " + total + " MW!");
  }
  return total;
}