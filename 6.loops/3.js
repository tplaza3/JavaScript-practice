// 3. Write a program that counts from 1 to 100 by 2's. Now make it work by 3's. Now have it count from 1 to 100 by any (positive) 		increment the user desires.

var number = 1;

while(number <= 100){
	console.log(number);
	number+=2;
}

var numberUser = prompt("Give me a number") 

while(number <= 100){
	console.log(number);
	number+=parseInt(numberUser);
}


