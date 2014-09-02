var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(numSheep > 10000) {
    numSheep = numSheep/2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");
  }
  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

// There will be 16 sheep after 1 month(s)!
// There will be 64 sheep after 2 month(s)!
// There will be 256 sheep after 3 month(s)!
// There will be 1024 sheep after 4 month(s)!
// There will be 4096 sheep after 5 month(s)!
// There will be 16384 sheep after 6 month(s)!
// Removing 8192 sheep from the population. Phew!
// There will be 32768 sheep after 7 month(s)!
// Removing 16384 sheep from the population. Phew!
// There will be 65536 sheep after 8 month(s)!
// Removing 32768 sheep from the population. Phew!
// There will be 131072 sheep after 9 month(s)!
// Removing 65536 sheep from the population. Phew!
// There will be 262144 sheep after 10 month(s)!
// Removing 131072 sheep from the population. Phew!
// There will be 524288 sheep after 11 month(s)!
// Removing 262144 sheep from the population. Phew!
// There will be 1048576 sheep after 12 month(s)!


var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 == 0) {
    numSheep = numSheep/4;
    console.log("Removing " + numSheep*3 + " sheep from the population. Phew!");
  }
  else if(numSheep > 10000) {
    numSheep = numSheep/2;
    console.log("Removing " + numSheep + " sheep from the population. Phew!");
  }
  numSheep*=4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

// There will be 16 sheep after 1 month(s)!
// There will be 64 sheep after 2 month(s)!
// There will be 256 sheep after 3 month(s)!
// Removing 192 sheep from the population. Phew!
// There will be 256 sheep after 4 month(s)!
// There will be 1024 sheep after 5 month(s)!
// There will be 4096 sheep after 6 month(s)!
// There will be 16384 sheep after 7 month(s)!
// Removing 12288 sheep from the population. Phew!
// There will be 16384 sheep after 8 month(s)!
// Removing 8192 sheep from the population. Phew!
// There will be 32768 sheep after 9 month(s)!
// Removing 16384 sheep from the population. Phew!
// There will be 65536 sheep after 10 month(s)!
// Removing 32768 sheep from the population. Phew!
// There will be 131072 sheep after 11 month(s)!
// Removing 98304 sheep from the population. Phew!
// There will be 131072 sheep after 12 month(s)!
