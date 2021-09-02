/*
Creating Object Literals
Objects store collections of key-value pairs.
Each key-value pair is a property—when a property is a function it is known as a method.
An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
*/
const fasterShip = {
	'Fuel Type': 'Turbo Fuel',
	color: 'silver'
      };

/*
Accessing Properties
You can access, add or edit a property within an object by using dot notation or bracket notation.
*/
let spaceship = {
	homePlanet: 'Earth',
	color: 'silver',
	'Fuel Type': 'Turbo Fuel',
	numCrew: 5,
	flightPath: ['Venus', 'Mars', 'Saturn']
      };
      
let crewCount = spaceship.numCrew;
      
const planetArray = spaceship.flightPath;

/*
Bracket Notation 
You can access, add or edit a property within an object by using dot notation or bracket notation.
*/
let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	'Active Mission' : true,
	homePlanet : 'Earth', 
	numCrew: 5
       };
      
let propName =  'Active Mission';
      
let isActive = spaceship[propName];
console.log(isActive);

/*
Property Assignment
You can assign a property within an object by using dot notation or bracket notation.
*/
let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	homePlanet : 'Earth',
	color: 'silver',
	'Secret Mission' : 'Discover life outside of Earth.'
      };
      
spaceship.color = 'glorious gold';
spaceship['numEngines'] = 10;
delete(spaceship['Secret Mission']); 
      
/*
Methods
We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
*/
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

/*
Nested Objects
We can navigate complex, nested objects by chaining operators.
*/
let spaceship = {
	passengers : [{name: 'Popeye'}],
	telescope: {
	  yearBuilt: 2018,
	  model: "91031-XLT",
	  focalLength: 2032 
	},
	crew: {
	  captain: { 
	    name: 'Sandra', 
	    degree: 'Computer Engineering', 
	    encourageTeam() { console.log('We got this!') },
	   'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
	},
	engine: {
	  model: "Nimbus2000"
	},
	nanoelectronics: {
	  computer: {
	    terabytes: 100,
	    monitors: "HD"
	  },
	  'back-up': {
	    battery: "Lithium",
	    terabytes: 50
	  }
	}
      }; 
      
let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0];

/*
Pass By Reference
Objects are mutable—we can change their properties even when they’re declared with const.
Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
*/
let spaceship = {
	'Fuel Type' : 'Turbo Fuel',
	homePlanet : 'Earth',
      };
      
      // Write your code below
      let greenEnergy = spaceship => {
	  spaceship['Fuel Type'] = 'avocado oil';
	}
      
      let remotelyDisable = spaceship => {
	spaceship['disabled'] = true;
      }
      
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

/*
Looping Through Objects
We can iterate through objects using the For...in syntax.
*/
let spaceship = {
	crew: {
	captain: { 
	    name: 'Lily', 
	    degree: 'Computer Engineering', 
	    cheerTeam() { console.log('You got this!') } 
	    },
	'chief officer': { 
	    name: 'Dan', 
	    degree: 'Aerospace Engineering', 
	    agree() { console.log('I agree, captain!') } 
	    },
	medic: { 
	    name: 'Clementine', 
	    degree: 'Physics', 
	    announce() { console.log(`Jets on!`) } },
	translator: {
	    name: 'Shauna', 
	    degree: 'Conservation Science', 
	    powerFuel() { console.log('The tank is full!') } 
	    }
	}
    }; 
    
for(let crewMember in spaceship.crew){
      console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
    
for(let crewMember in spaceship.crew){
   console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}