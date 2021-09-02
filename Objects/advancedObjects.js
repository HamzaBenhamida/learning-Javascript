/*
The this Keyword
The object that a method belongs to is called the calling object.
The value of this depends on where the this is being accessed from.
The this keyword refers the calling object and can be used to access properties of the calling object.
*/
const robot = {
	'model': '1E78V2',
	'energyLevel': 100,
	provideInfo(){
	  return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
	}
      };
      
console.log(robot.provideInfo());

/*
Arrow Functions and this
We cannot use arrow functions as methods if we want to access other internal properties.
*/
const robot = {
	energyLevel: 100,
	checkEnergy() {
	  console.log(`Energy is currently at ${this.energyLevel}%.`)
	}
      }
      
robot.checkEnergy();

/*
Privacy
Methods do not automatically have access to other internal properties of the calling object.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
*/
const robot = {
	_energyLevel: 100,
	recharge(){
	  this._energyLevel += 30;
	  console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
	}
      };
      
robot._energyLevel = 'high';
robot.recharge();
      
/*
Getters
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
*/
const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	get energyLevel() {
	  if(typeof(this._energyLevel) === 'number')
	    return `My current energy level is ${this._energyLevel}`;
	  else
	    return 'System malfunction: cannot retrieve energy level';
	}
      };
      
console.log(robot.energyLevel);

/*
Setters
*/
const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	_numOfSensors: 15,
	get numOfSensors(){
	  if(typeof this._numOfSensors === 'number'){
	    return this._numOfSensors;
	  } else {
	    return 'Sensors are currently down.'
	  }
	},
	set numOfSensors(num){
	  if(typeof(num) === 'number' && num >= 0)
	    this._numOfSensors = num;
	  else
	    console.log('Pass in a number that is greater than or equal to 0');
	},
	
      };
      
robot.numOfSensors = 100;
console.log(robot.numOfSensors);

/*
Factory Functions
Factory functions allow us to create object instances quickly and repeatedly
*/
let robotFactory = (model, mobile) => {
	return {
	 model: model,
	 mobile: mobile,
	 beep() {
	   console.log('Beep Boop');
	 }
	}
	  
       };
       
const tinCan = robotFactory('P-500', true);
tinCan.beep();

/*
Property Value Shorthand
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
*/
let robotFactory = (model, mobile) => {
	return {
	  model,
	  mobile,
	  beep() {
	    console.log('Beep Boop');
	  }
	}
      };
      
// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*
Destructed Assignment
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
*/
const robot = {
	model: '1E78V2',
	energyLevel: 100,
	functionality: {
	  beep() {
	    console.log('Beep Boop');
	  },
	  fireLaser() {
	    console.log('Pew Pew');
	  },
	}
      };
      
const { functionality } = robot;
functionality.beep();

/*
Built-in Object Methods
As with any concept, it is a good skill to learn how to use the documentation with objects!
*/
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
console.log(robotKeys);

const robotEntries =  Object.entries(robot);
console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
