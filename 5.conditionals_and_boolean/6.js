// 6. Prompt the user for a positive odd number. Write a program that uses a nested if-statement to determine if the user's input 		fulfills the conditions. Now write one that uses the logical operators (&& and/or ||) to do the same test, but in less time.

var number = prompt("Give me a positve odd number!") 

if(number%2 != 0 && number > 0 && number == parseInt(number)){
	console.log("A okay");
} else {
	console.log("I think you messed up");
}