/*
The .forEach() Method
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

function printFruits(element){
  console.log("I want to eat a " + element);
}

fruits.forEach(printFruits);

/*
The .map() Method
.map() executes the same code on every element in an array and returns a new array with the updated elements.
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
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
*/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(numbers => {
  if(numbers < 250)
    return numbers;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(words => {
  if(words.length > 7)
    return words;
});

/*
The FindIndex() Method
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(word => {
  return word === 'elephant';
});

const startsWithS = animals.findIndex(word => {
  return word[0] === 's';

/*
The .reduce() Method
.reduce() iterates through an array and takes the values of the elements and returns a single value.
*/
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator , currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*
Iterator Documentation
All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

// Using filter to create a new array
const interestingWords = words.filter(word => word.length > 5);

console.log(interestingWords.every((word) => {
  if(word.length > 5){
      return true;
  }
    else{
      return false;
    }
 } ));

/*
Choosing the Right Iterator
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
*/
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);