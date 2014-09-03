// 5. Write a program which, for any positive integer n, figures out n factorial. For example, 7 factorial is 7 * 6 * 5 * 4 * 3 * 2 * 		1.


var numberUser = prompt("Give me a number");
var sum = 1

for(var factNumber = 1; factNumber <= numberUser; factNumber++){
  sum*=factNumber;
  console.log(sum);
}



// var numberUser = prompt("Give me a number")
// var sum = 0
// var totalSum = 0
//
// while((numberUser - 1) > 0){
// 	sum = (numberUser * (numberUser - 1) ;
// 	totalSum+=sum;
// 	numberUser--;
// }
//
// console.log(totalSum);