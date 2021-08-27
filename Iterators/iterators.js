/*
The .forEach() Method
...
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

function printFruits(element){
  console.log("I want to eat a " + element);
}

fruits.forEach(printFruits);

/*
The .map() Method
...
*/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})

/*
The .filter() Method
...
*/
