//Exercicio 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const areas = [];

rectangles.forEach((rectangle) => {
  areas.push(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
});


//console.log(areas);
//Exercicio 2

const sum = (...values) => values.reduce((total, value) => total + value);

//console.log(sum(1, 5, 9, 21));
//Exercicio 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

//console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
//console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
//Exercicio 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (people) => people.filter((person) => person.bornIn > 1901 && person.bornIn < 2001);

//console.log(filterPeople(people));
// Exercicio 5

const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([first, second, tird]) => [tird, second, first];

console.log(swap(myList));
