/*
Console
Console is basically a terminal, its where we see errors.
You can output or print to the console with the console object.

IMPORTANT: use semicolon after each statement
*/

console.log(18) // prints number
console.log(100)

/*
Data Types
Number: any number (5, 6.7, -23..)
String: consist of multiple characters surrounded by "" or ''.
Boolean: true or false
Null: absence of a value
Undefined: absence of a value but different than null
Symbol:symbols are unique identifiers, useful in more complex coding.
Object: collections of primitive data (which include everyone data type mentioned above)
*/

console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)

/*
Arithmetic
Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: % (remainder of euclidean division)
*/

console.log(18+3.5); // prints the result
console.log(2021-1969);
console.log(65/240);
console.log(0.2708*100);

/*
String Concatenation
concatenate strings with + sign
*/

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.'); // Prints 'I love to code.'

console.log("Hello"+" "+ "World");

/*
Properties
You can access properties of objects, including strings. 
Strings are also objects which store additional data which can accessed with the dot operator.
(primitive data types are called instances in Javascript, in this case Strings are called instances)
*/

console.log('Hello'.length); // Prints 5

console.log('Teaching the world how to code'.length);

/*
Methods
Methods are built around instances to deliver specific results. We call methods by adding to an instance:
-a period (the dot operator)
-the name of the method
-opening and closing parentheses
*/

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

/*
Built-in Objects
Objects which are built-in the Javascript Language, they are very useful.
Objects have methods.
*/

console.log(Math.random()); // Prints a random number between 0 and 1
Math.floor(Math.random() * 50);
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8)); // smallest integer greater than or equal to a decimal number.
console.log(Number.isInteger(2017)); // checks if it is an integer