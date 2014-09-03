// 2. Create an array. Prompt the user for an index, then print the array element at that index. What happens if the user tries to access a non-existent array element? What happens if the user tries to use a floating point number or a word as the index?


var arr = ["Tony", 6, true, 8.8];

var userNumber = prompt("Will you give me a number 0 - 3 please");

console.log(arr[userNumber]);