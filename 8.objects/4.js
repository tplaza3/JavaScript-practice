// 4. Learn how to iterate through an object and print each key/value pair to the console.

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

for (var key in person) 
{
    if (person.hasOwnProperty(key))
    {
    console.log(key + " = " + person[key]);
    }
}

// will print to console "key = value" (age = 50)
