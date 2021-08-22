/*
Repeating Tasks Manually
It takes a lot of time
*/
let vacationSpots = ['Pris','Rome','neptune'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/*
The For Loop
How to write for loops with an iterator variable that increments or decrements.
How to use a for loop to iterate through an array.
*/
for (let i=5; i<=10;i++){
	console.log(i);
}

/*
Looping in Reverse
*/
for (let counter = 3; counter >= 0; counter--){
	console.log(counter);
}            

/*
Looping through Arrays
*/
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i=0; i<vacationSpots.length ;i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

/*
Nested Loops
*/
const bobsFollowers = ['r','ty','hrh','asd'];
const tinasFollowers = ['r','ty','papa'];
const mutualFollowers = [];

for (let i=0;i<bobsFollowers.length;i++){
  for (let j=0;j<tinasFollowers.length;j++){
    if (tinasFollowers[j] === bobsFollowers[i]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

/*
The While Loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
*/
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*
Do...While Statements
do...while loops run code at least once— only checking the stopping condition after the first execution
*/
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do{
cupsAdded++;
console.log(cupsAdded);
}while(cupsAdded<cupsOfSugarNeeded);

/*
The Break Keyword
The break keyword allows programs to leave a loop during the execution of its block
*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i=0; i<rapperArray.length; i++){
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.')
    break;
}
console.log("And if you don't know, now you know.");



