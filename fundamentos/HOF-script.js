// Array.forEach
console.log('// Array.forEach');

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach((item) => showEmailList(item));

// Array.find
console.log('// Array.find');
// <<< exercise 1 >>>
console.log('<<< exercise 1 >>>');

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5());

// <<< exercise 2 >>>
console.log('<<< exercise 2 >>>');

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters());

// <<< exercise 3 >>>
console.log('<<< exercise 3 >>>');

const songs = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => songs.find((song) => song.id === id);

console.log(findMusic('31031685'));

// Array.some and Array.every
console.log('// Array.some and Array.every');
// <<< exercise 1 >>>
console.log('<<< exercise 1 >>>');

const nomes = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (name, arr) => arr.some((nome) => nome === name);

console.log(hasName('Ana', nomes));

// <<< exercise 2 >>>
console.log('<<< exercise 2 >>>');

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((key) => key.age >= minimumAge);

console.log(verifyAges(people, 18));
