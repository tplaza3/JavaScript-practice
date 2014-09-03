// 5. Create a menu (perhaps for food or drinks?) which asks the user to input a number corresponding to their choice of item, and 		which then prints "Delivering [that item]." Use a case statement. Make sure to account for invalid inputs using an else. (Read 		up on case statements in JavaScript.)


var number = prompt("Give me a number between 0 and 6!") 

switch(parseInt(number)) {
    case 0:
        day = "Sunday";
				console.log(day);
        break;
    case 1:
        day = "Monday";
				console.log(day);
        break;
    case 2:
        day = "Tuesday";
				console.log(day);
        break;
    case 3:
        day = "Wednesday";
				console.log(day);
        break;
    case 4:
        day = "Thursday";
				console.log(day);
        break;
    case 5:
        day = "Friday";
				console.log(day);
        break;
    case 6:
        day = "Saturday";
				console.log(day);
        break;
}