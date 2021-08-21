/* 
Blocks and Scope
Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Blocks are statements that exist within curly braces {}.
*/
const city = 'New York City';

function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline()); // notice that the logCitySkyline() function is able to access both variables without any problems.

/*
Global Scope
Global scope refers to the context within which variables are accessible to every part of the program.
Global namespace is the space in our code that contains globally scoped information.
Global variables are variables that exist within global scope.
*/
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky()); // notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.

/* Block Scope
Block scope refers to the context within which variables that are accessible only within the block they are defined.
Local variables are variables that exist within block scope.
const and let are block scoped variables, meaning they are only accessible in their block or nested blocks.
*/
function logVisibleLightWaves(){
	const lightWaves = 'Moonlight';
	console.log(lightWaves);
      }
      
logVisibleLightWaves();
console.log(lightWaves); // notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

/*
Scope Pollution
Scope pollution is when too many variables exist in a namespace or variable names are reused.
*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
// notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.
console.log(stars); 

/*
Practice Good Scoping
Tightly scoping your variables will greatly improve your code in several ways.
 It is best practice to keep global variables to a minimum.
*/
const logVisibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';

	if(region === 'The Arctic'){
	  let lightWaves= 'Northern Lights';
	  // notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.
	  console.log(lightWaves);
	}

      };
      
logVisibleLightWaves();