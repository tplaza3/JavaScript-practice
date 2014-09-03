// 4. Create a method called greeting which takes a single argument (a name) and prints "Hello" + name to the screen. Call this 		method with a few different names.

var name = prompt("Whats your name?");

function greeting(name) {
	return "Hello " + name;
}

var t = greeting(name);

console.log(t)

