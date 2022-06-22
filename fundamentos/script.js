const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (action) => action();

//console.log(doingThings(wakeUp));

// Exercicio 1

const informations = (fullName) => {
  const email = `${fullName.split(' ')[0].toLowerCase()}_${fullName.split(' ')[1].toLowerCase()}@trybe.com`
  const informationsObject = {
    nomeCompleto: fullName,
    'email': email,
  };
  return informationsObject;
}

const newEmployees = (funct) => {
  const employees = {
    id1: funct('Pedro Guerra'),
    id2: funct('Luiza Drumond'),
    id3: funct('Carla Paiva'),
  }
  return employees;
};

//console.log(newEmployees(informations));

// Exercicio 2

const checkNumber = (choosed, random) => {
  if (random === choosed) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

const sortNumber = (number, funct) => funct(number, Math.floor(Math.random() * 5) + 1);

//console.log(sortNumber(2, checkNumber));

// Exercicio 3

const checkAnswers = (answers, test) => {
  let grade = 0;
  for (let index = 0; index < answers.length; index += 1) {
    if (answers[index] === test[index]) {
      grade += 1;
    } else if (test[index] === 'N.A') {
      grade = grade;
    } else {
      grade -= 0.5;
    }
  }
  return grade;
};

const testGrade = (answers, test, check) => check(answers, test);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(testGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
