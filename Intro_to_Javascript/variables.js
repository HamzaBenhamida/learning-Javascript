/*
Create a Variable: var
Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.
*/
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);
//Output: pizza \n 8
   
/*
Create a Variable: let
The var keyword is used in pre-ES6 versions of JS.
let is the preferred way to declare a variable when it can be reassigned.
*/
let changeMe = true;
changeMe = false;
console.log(changeMe)
//Output: false

/*
Create a Variable: const
const is the preferred way to declare a variable with a constant value.
Variables that have not been initialized store the primitive data type undefined.
*/
const entree = 'Enchiladas';
console.log(entree);
entree = "Tacos";
//Output: Enchiladas \n TypeError: Assignment to constant variable.

/*
Mathematical Assignment Operators
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
*/
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

/*
The Increment and Decrement Operator
*/
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

/*
String Concatenation with Variables
The + operator is used to concatenate strings including string values held in variables
*/
var favoriteAnimal = "Lion";

console.log("My favorite animal: " + favoriteAnimal);

/*
String Interpolation
In ES6, template literals use backticks ` and ${} to interpolate values into a string.
*/
var myName = "Hamza";
var myCity = "Vancouver";

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

/*
typeof operator
The typeof keyword returns the data type (as a string) of a value.
*/
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);