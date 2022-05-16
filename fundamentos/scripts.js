// Exercicio 1
const number = 10;
fatorial = 1;

for(let index = 1; index <= number; index += 1) {
  fatorial = fatorial * index;
};

console.log(fatorial);
//Exercicio 2
let word = 'arroz';
let invertedWord = '';

for(let index = word.length -1; index >= 0; index -= 1) {
  invertedWord += word[index];
};

console.log(invertedWord);
// Exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let longestWord = array[1];
let shorterWord = array[1];

for(let index = 0; index < array.length; index += 1) {
  if(longestWord.length < array[index].length) {
    longestWord = array[index];
  }
  if(shorterWord.length > array[index].length) {
    shorterWord = array[index];
  }
};

console.log(longestWord);
console.log(shorterWord);
// Exercicio 4
const referencialNumber = 50;
let bigestPrimeNumber = null;

for(let analyzedNumber = 0; analyzedNumber <= referencialNumber; analyzedNumber += 1) {
  let dividers = 0;
  for(let index = 0; index <= analyzedNumber; index += 1) {
    if (analyzedNumber % index == 0) {
      dividers += 1;
    };
  };
  if(dividers == 2) {
    bigestPrimeNumber = analyzedNumber;
  };
}

console.log(bigestPrimeNumber);