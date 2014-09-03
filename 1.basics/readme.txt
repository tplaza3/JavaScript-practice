Basics of Output

1. Write a program that prints Hello World! to the console. (I did this one for you.)

2. Write a program that prints "Hello" and "World" to the screen, both on their own lines, and each with their own console.log() statement.

3. Do the same as the previous problem, but with only one print statement (Hint: Use \n)

4. What happens if you use string concatenation, i.e. console.log("hel" + "lo")?

"hello" is returned

5. What happens if you try to multiply a string, i.e. console.log("Hello " * 3)

"NaN" is returned

6. What happens if you use concatenation with a string and an integer, i.e. console.log("The meaning of life is " + 42). Is this behavior the same or different as in Ruby?

would need to convert 42 to a string to "puts" the whole thing

7. What is the difference between console.log(1 + 1) and console.log("1" + "1")? Why does this behavior happen?

2
11

the first is adding integers 1 + 1
the second is concat the strings "1" + "1"

Documentation

1. Learn how to write single-line comments (they start with //).


Using Variables

1. Create a variable called name and store your name in it. Print this to the screen using console.log().
2. Do it again, but print out a sentence like "My name is Sumeet" using string concatenation.
3. Create two variables and assign a number to each of them. Then create a third variable and assign to it the sum of the first 		two. Print all three to the screen like so: 3 + 7 = 10.


Simple Data Manipulation

1. Learn what each of the operators (listed below) does, then write a program that sets each of two variables to a number, then 	outputs the result of each of these operators on those numbers. Make sure you can describe, in your own words, what each operator 	does.
	+
	-
	/
	*
	%
	==
	<, >, <=, >=
	
2. Write a program that sets each of two variables to a number, then displays the integer quotient and integer result to the    		screen, like so: 7 / 3 = 2 r 1. (Hint: parseInt() in JavaScript is like to_i in Ruby.)
3. Write a program that sets a variable to a string, then return the ALLCAPS version of that string. (In Ruby, you would have used 	 upcase.)
4.	Learn how to use the compound assignment operators. What do they do?
		+=
		-=
		*=
		/=
		%=
		


Practice Problems

Don't forget to track this all with Git!

Conditionals and Boolean Logic

1. Know how to use if, else if, and else statements to create branching boolean logic trees.

2. Write a program which prompts the user for a number, outputs "Valid" if the number is positive, or "Invalid" if the number is 		less than or equal to zero.

3. Write a program which prompts the user for a number and outputs "Valid" if the number is between 1 and 10 (inclusive) and   	 		"Invalid" otherwise.

4. Write a program which prompts the user for an integer and outputs whether that integer is even or odd. (Hint: even numbers have 		a remainder of 0 when divided by 2; odd numbers have a remainder of 1 when divided by 2.)

5. Create a menu (perhaps for food or drinks?) which asks the user to input a number corresponding to their choice of item, and 		which then prints "Delivering [that item]." Use a case statement. Make sure to account for invalid inputs using an else. (Read 		up on case statements in JavaScript.)

6. Prompt the user for a positive odd number. Write a program that uses a nested if-statement to determine if the user's input 		fulfills the conditions. Now write one that uses the logical operators (&& and/or ||) to do the same test, but in less time.

7. Optional: Write a program which asks the user for 3 numbers and sorts them from least to greatest using nothing but if, elsif 		and else statements. Output the result. DNC

8. Optional: Write a program which prompts the user for an all-caps string and which then checks to see if that string is indeed 		all-caps. DNC

9. Optional: Using if, else if, and else blocks, write a program which allows two users to each input their moves in "Rock, Paper, 		Scissors" and which determines the winner (or if a tie occurred). DNC



Loops and Repetition Structures

1. Write a program that uses a loop to count from 1 to 10 on-screen.

2. Write a program that uses a loop to count down from 10 to 1 on-screen.

3. Write a program that counts from 1 to 100 by 2's. Now make it work by 3's. Now have it count from 1 to 100 by any (positive) 		increment the user desires.

4. Write a program which prompts the user for a positive odd number, and which keeps prompting the user until they successfully 		input such a number. //I am not sure this is working

5. Write a program which, for any positive integer n, figures out n factorial. For example, 7 factorial is 7 * 6 * 5 * 4 * 3 * 2 * 		1.//Not the best

6. Write a program which asks the user to enter a "password" (hardcoded in the code itself). After three unsuccessful tries, the 		program should exit. // DNC

7. Write a program which prompts the user for a string of text and then prints that string out vertically, i.e. one character per 		line. //DNC

8. Optional: Use a nested loop (loops inside of loops) structure to create a multiplication table.

9. Optional: Use your Rock-Paper-Scissors program from the previous collection of exercises and re-write it so that there is a 		best of 3.


Array Basics

1. Create an array that holds a variety of data (strings, integers, floats, booleans). Print that array to the screen.

2. Create an array. Prompt the user for an index, then print the array element at that index. What happens if the user tries to 	access a non-existent array element? What happens if the user tries to use a floating point number or a word as the index?

 	Undefined gets returned

3. Learn how to use the .length to determine how many elements are in an array.

4. Use a loop to iterate through an array, printing each element to the screen on its own line.

5. Learn how to use push and pop with arrays. What do each of these do?

6. Learn how to create a multi-dimensional array. Learn how to access elements within the multidimensional array.

7. Optional: Imagine that you have a hallway which has 500 switches, and that each switch has a corresponding bulb right next to 	it. 	All the switches start in the "off" position. You start at switch #1 and count up by 1's, flipping every switch until you 	get to 	the end. Then you come back to the beginning, and repeat the process starting at switch #2 and flipping every second 	switch (and 	so on until you are all the way done with the hallway). By the time you start with the 500th switch, thus completing 	the 	process, which switches are on, and which ones are off? Use an array with 501 elements to simulate this hallway (ignore 	element 	0), as well as a nested loop structure to simulate this problem. As a hint, it may be easiest to simulate the switches 	as 	booleans, though you can use strings, symbols, integers, or any of a number of other methods. With the switches that are on, 	what 	common numeric property makes those the ones that are left on?

8. Optional: Simulate a random-move artificial opponent in Rock-Paper-Scissors.

Objects

	The tutorial hasn't covered this yet, but you can handle it. "Objects" in JavaScript behave just like "Hashes" in Ruby, so you 	can apply everything you know about hashes here; JavaScript just has a different name for this data structure than Ruby does. 	(Annoying, isn't it?)


1. What are objects [in JavaScript] used for? Why might you use an object? 

		They are hashes!

2. Learn how to create an object that contains at least one key/value pair. What is the difference between a key and a value? What    types of data can be used as keys? Can you have duplicate keys in an object? What about duplicate values? What types of data 		can be used as values? Given a key, how do you access the corresponding value in the object? Given a value, how do you look up 		the keys that have that value? How would you add additional keys to the object?

3. What is the difference between an array and an object? Why might you use an array instead of an object? Why might you use an 		object instead of an array?

4. Learn how to iterate through an object and print each key/value pair to the console.

5. Optional: Modify your Rock-Paper-Scissors game so that instead of using if / else if / else blocks to determine the winner, it 	instead uses an object as a referee. First create an object which has "rock", "paper", and "scissors" as keys, and the moves 	they win against as the corresponding values. Treat player 1's move as the key, and then check to see if Player 2's move matches 	the corresponding value.

Functions (a.k.a. methods)

1. Learn how to create a method.

2.Learn the meanings of each of these terms regarding methods:
		Method signature/name
		Parameters
		Arguments (how are parameters and arguments different?)
		Function call
		Return values
		Method body

3. Create a method called hello_world which takes no arguments and which prints Hello, World to the screen. Call this method.

4. Create a method called greeting which takes a single argument (a name) and prints "Hello" + name to the screen. Call this 		method with a few different names.

5. Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.

6. Modify sum_these_numbers (written before) so that instead of printing the sum, it returns the sum back to where the method was 	called. Print the sum (calculated by the method) to the screen, but don't do that printing inside of the method.

7. Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false 	otherwise.

8. Write a method which calls another method, then uses its return value.

9. Look at problems from the previous steps, particularly ones where the program takes some information, does some stuff, then 		comes back with a result. Turn a few of these into methods. Almost all of the problems listed in the previous sections can be 		re-written to use methods and to adhere to the single responsibility principle. Go ahead and use multiple methods if necessary.








