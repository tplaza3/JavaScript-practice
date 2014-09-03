// 4. Write a program which prompts the user for an integer and outputs whether that integer is even or odd. (Hint: even numbers have 		a remainder of 0 when divided by 2; odd numbers have a remainder of 1 when divided by 2.)

var number = prompt("Give me a whold number!") 

if(number%2 == 0 ){
	console.log("you have an even number!");
} else {
	console.log("That's an odd one!");
}