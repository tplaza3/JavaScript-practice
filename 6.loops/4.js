// 4. Write a program which prompts the user for a positive odd number, and which keeps prompting the user until they successfully 		input such a number.
var number = prompt("Give me a postive odd number") 

while(number%2 == 0){
	number = console.log(prompt("Give me a positive odd number"));
}
