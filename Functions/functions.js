/*
Function Declarations
A function is a reusable block of code that groups together a sequence of statements to perform a specific task.
*/
function getReminder(){
	console.log('Water the plants.');
}

function greetInSpanish(){	
	console.log('Buenas Tardes.');
}

/*
Calling a Function
Write the name of the function, and the paratheses and optional parameters to invoke the the body of the of the function.
*/
function sayThanks(){
	console.log('Thank you for your purchase! We appreciate your business.');
}
      
sayThanks();
sayThanks();
sayThanks();

/*
Parameters and Arguments
A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked:
*/
function sayThanks(name) {
	console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
      
sayThanks('Cole');

/*
Default Parameters
ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.
*/
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
	console.log(`Remember to buy ${item1}`);
	console.log(`Remember to buy ${item2}`);
	console.log(`Remember to buy ${item3}`);
}
      
/*
Return
To return a value from a function, we use a return statement.
*/
function monitorCount(rows,columns){
	return rows * columns;
}
      
const numOfMonitors = monitorCount(5,4);
      
console.log(numOfMonitors);

/*
Helper Functions
Smaller functions which help bigger functions
*/
function costOfMonitors(rows, columns){
	return monitorCount(rows, columns) * 200;
}
      
const totalCost = costOfMonitors(5,4);
      
console.log(totalCost);

/*
Function Expressions
...
*/
const plantNeedsWater = function(day){
	if(day === 'Wednesday'){
	  return true;
	} else {
	  return false;
	}
};
      
console.log(plantNeedsWater('Tuesday'));

/*
Arrow Functions
...
*/
const plantNeedsWater = (day) => {
	if(day === 'Wednesday'){
	  return true;
	} else {
	  return false;
	}
};

/*
Concise Body Arrow Functions
Function definition can be made concise using concise arrow notation:
*/
const plantNeedsWater = day => day === 'Wednesday' ? true : false;