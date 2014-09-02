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