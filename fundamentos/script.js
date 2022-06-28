// Exercicio 1
const arraysToReduce = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arrays) => {
  return arrays.reduce(((flat, current) => {
    current.forEach((index) => flat.push(index));
    return flat;
  }));
}

//console.log(flatten(arraysToReduce));

// const para o 2 e 3

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercicio 2

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = (booksArray) => {
  // escreva seu código aqui
  return booksArray.reduce(((authorNames, book, index) => (index < booksArray.length - 1) ? authorNames += `${book.author.name}, ` : authorNames += `${book.author.name}.`), '');
}

//console.log(reduceNames(books));

// Exercicio 3

//const expectedResult = 43;

function averageAge(booksArray) {
  // escreva seu código aqui
  return booksArray.map((book) => book.releaseYear - book.author.birthYear).reduce((sumOfAges, age) => sumOfAges + age) / booksArray.length;
}

//console.log(averageAge(books));

// Exercicio 4


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook(booksArray) {
  // escreva seu código aqui
  return booksArray.reduce((longest, book) => (longest.name.length < book.name.length) ? book : longest);
}

//console.log(longestNamedBook(books));

// Exercicio 5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  return array.map((word) => word.toLowerCase().split('').filter((index) => index === 'a')).reduce((allA, arr) => {
    arr.forEach((index) => allA.push(index));
    return allA;
  }).length;
}

//console.log(containsA(names));

// Exercicio 6
