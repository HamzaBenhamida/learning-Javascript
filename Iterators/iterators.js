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
...
*/
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(word => {
  return word === 'elephant';
});

const startsWithS = animals.findIndex(word => {
  return word[0] === 's';

/*
The .reduce() Method
..
*/
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator , currentValue) => {
  return accumulator * currentValue;
});