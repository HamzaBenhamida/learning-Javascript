/*
Arrays
Arrays are lists that store data in JavaScript.
Arrays are created with brackets [].
*/
const hobbies = ['1', '2', '3'];

console.log(hobbies);

/* 
Accessing Elements
Each item inside of an array is at a numbered position, or index, starting at 0.
We can access one item in an array using its index, with syntax like: myArray[0].
*/
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); // errror: trying to access an index beyond the last item

/*
Update Elements
We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
*/
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

/*
Arrays with let and const
Variables that contain arrays can be declared with let or const. 
Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
*/
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
console.log(condiments[0]);
condiments = ['Mayo']; //Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
console.log(condiments);
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils[3]);

/*
The .length property
Arrays have a length property, which allows you to see how many items are in an array.
*/
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

/*
The .push() Method
Arrays have their own methods, including .push(), which add items from an array.
*/
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('item 3', 'item 4');
console.log(chores);

/*
The .pop() Method
Arrays have their own methods, including .pop(), which remove items from an array.
*/
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

/*
More Array Methods
Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
*/
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
groceryList.unshift('popcorn');
console.log(groceryList);
console.log(groceryList.slice(1,4)) // Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating!
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/*
Arrays and Functions
Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
Arrays mutated inside of a function will keep that change even outside the function.
*/
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);

/*
Nested Arrays
Arrays can be nested inside other arrays.
To access elements in nested arrays chain indices using bracket notation.
*/
let numberClusters = [[1,2],[3,4],[5,6]]; 
const target = numberClusters[2][1];