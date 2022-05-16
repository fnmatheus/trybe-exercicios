// Exercicio 1
console.log('// Exercicio 1');
const number = 10;
let fatorial = 1;

for(let index = 1; index <= number; index += 1) {
  fatorial = fatorial * index;
};

console.log(fatorial);
//Exercicio 2
console.log('// Exercicio 2');
let word = 'arroz';
let invertedWord = '';

for(let index = word.length - 1; index >= 0; index -= 1) {
  invertedWord += word[index];
};

console.log(invertedWord);
// Exercicio 3
console.log('// Exercicio 3');
let array = ['java', 'javascript', 'python', 'html', 'css'];
let longestWord = array[0];
let shorterWord = array[0];

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
console.log('// Exercicio 4');
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
// Bonus
let n = 5;
// Bonus 1
console.log('// Bonus 1');
if(n >= 1) {
  for(let index = 1; index <= n; index += 1) {
    let square = '';
    for(let isquare = 1; isquare <= n; isquare += 1) {
      square += '*';
    }
    console.log(square);
  }
}
// Bonus 2
console.log('// Bonus 2');
if(n >= 1) {
  let triangle = '';
  for(let index = 1; index <= n; index += 1) {
    triangle += '*'
    console.log(triangle);
  }
}
// Bonus 3
console.log('// Bonus 3');
if(n >= 1) {
  let triangle = '';
  for(let index = 1; index <= n - 1; index += 1) {
    triangle += ' ';
  }
  triangle += '*';
  console.log(triangle);
  for(let index = 1; index <= n - 1; index += 1) {
    triangle = triangle.substring(1);
    triangle += '*';
    console.log(triangle);
  }
}
// Bonus 4
console.log('// Bonus 4');
if(n >= 1 && n % 2 != 0) {
  let length = Math.floor(n / 2);
  let triangle = '';
  for(let index = 1; index <= length; index += 1) {
    triangle += ' ';
  }
  triangle += '*';
  console.log(triangle);
  for(let index = 1; index < n; index += 2) {
    triangle = triangle.substring(1);
    triangle += '**';
    console.log(triangle);
  }
}
// Bonus 5
console.log('// Bonus 5');
n = 7;
if(n > 3 && n % 2 != 0) {
  let length = Math.floor(n / 2);
  let triangle = '';
  for(let index = 1; index <= length; index += 1) {
    triangle += ' ';
  }
  triangle += '*';
  console.log(triangle);
  triangle = triangle.substring(1);
  triangle += ' *';
  console.log(triangle);
  for(let index = 3; index < n - 2; index += 2) {
    triangle = triangle.substring(1, triangle.length - 1);
    for(let space = 1; space <= index - 2; space += 1) {
      triangle += '  ';
    }
    triangle += '*';
    console.log(triangle);
  }
  triangle = '';
  for(let index = 1; index <= n; index += 1) {
    triangle += '*';
  }
  console.log(triangle);
}
// Bonus 6
console.log('// Bonus 6');
let thisIsPrime = 20;
let primeDividers = null;
for(let index = 0; index <= thisIsPrime; index += 1) {
  if(thisIsPrime % index == 0) {
    primeDividers += 1;
  }
}
if(primeDividers == 2) {
  console.log('É um número primo');
}
else {
  console.log('Não é um número primo');
}