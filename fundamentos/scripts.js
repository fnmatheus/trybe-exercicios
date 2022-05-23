// Parte I
console.log('// Parte I');
// Exercicio 1
console.log('// Exercicio 1');
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);
// Exercicio 2
console.log('// Exercicio 2');
info['recorrente'] = 'Sim';

console.log(info);
// Exercicio 3
console.log('// Exercicio 3');
for(let key in info) {
  console.log(key);
};
// Exercicio 4
console.log('// Exercicio 4');
for(let key in info) {
  console.log(info[key]);
};
// Exercicio 5
console.log('// Exercicio 5');
let otherInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for(let key in info) {
  if(info[key] != otherInfo[key]) {
    console.log(info[key] + ' e ' + otherInfo[key]);
  }
  else {
    console.log('Ambos recorrentes')
  }
}
// Novo objeto para o exercicio 6 a 8
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// Exercicio 6
console.log('// Exercicio 6');
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');
// Exercicio 7
console.log('// Exercicio 7');
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco',})
console.log(leitor.livrosFavoritos)
// Exercicio 8
console.log('// Exercicio 8');
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
// Parte II
console.log('// Parte II');
// Exercicio 1
console.log('// Exercicio 1');
function verificaPalindrome(word) {
  let palindrome = '';
  for(let index = word.length - 1; index >= 0; index -= 1) {
    palindrome += word[index];
  };
  if(palindrome === word) {
    return true;
  }
  else return false;
};

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
// Exercicio 2
console.log('// Exercicio 2');
function bigestIndex(array) {
  let bigIndex = null;
  let bigNumber = null;
  for(let index in array) {
    if(array[index] > bigIndex) {
      bigNumber = array[index];
      bigIndex = index;
    };
  };
  return bigIndex;
};

console.log(bigestIndex([2, 3, 6, 7, 10, 1]));
// Exercicio 3
console.log('// Exercicio 3');
function smallerIndex(array) {
  let smallIndex = null;
  let smallNumber = null;
  for(let index in array) {
    if(array[index] < smallIndex) {
      smallNumber = array[index];
      smallIndex = index;
    };
  };
  return smallIndex;
};

console.log(smallerIndex([2, 4, 6, 7, 10, 0, -3]));
// Exercicio 4
console.log('// Exercicio 4');
function bigestName(array) {
  let bigName = '';
  for (let index of array) {
    if(index.length > bigName.length) {
      bigName = index;
    };
  };
  return bigName;
};

console.log(bigestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
// Exercicio 5
console.log('// Exercicio 5');
function moreRepited(array) {
  let numberRepetition = repetition(array);
  let moreRepitedNumber = Object.keys(numberRepetition)[0];
  for(let index in numberRepetition){
    if(numberRepetition[index] > numberRepetition[moreRepitedNumber]) {
      moreRepitedNumber = index;
    };
  };
  return moreRepitedNumber;
};
function repetition(array) {
  let numberRepetition = {};
  for(let number = 0; number < array.length; number += 1) {
    numberRepetition[array[number]] = 0;
    for(let index = 0; index < array.length; index += 1) {
      if(array[index] == array[number]) {
        numberRepetition[array[number]] += 1;
      };
    };
  };
  return numberRepetition;
};

console.log(moreRepited([2, 3, 2, 5, 8, 2, 3]));
// Exercicio 6
console.log('// Exercicio 6');
function allNumbersAdded(number) {
  let allAdded = 0;
  if(number >= 0) {
    for(let index = 0; index <= number; index += 1) {
      allAdded += index;
    };
    return allAdded;
  };
  return 'número não valido';
};

console.log(allNumbersAdded(5));
// Exercicio 7
console.log('// Exercicio 7');
function isTheEnd (word, ending) {
  if(word.length > ending.length) {
     let endWordIndex = word.length - ending.length;
     let endWord = '';
     for(let index = 0; index < ending.length; index += 1) {
       endWord += word[endWordIndex + index];
     };
     if(endWord == ending) {
       return true;
     };
     return false;
  };
  return false;
};

console.log(isTheEnd('trybe', 'be'));
console.log(isTheEnd('joaofernando', 'fernan'));
// Parte Bonus
console.log('// Parte Bonus');
// Exercicio 1
console.log('// Exercicio 1');
function addNumber(numberArray) {
  let array = numberArray;
  let number = 0;
  let index = 0;
  while (index < array.length) {
    if (array[index] < array[index + 1]) {
      number += array[index + 1] - array[index];
      array.splice(0, 2);
    } else {
      number += array[index];
      array.splice(0, 1);
    }
  }
  return number;
}

function letterToNumber(array) {
  let numbersInArray = [];
  for (let number of array) {
    switch (number) {
      case 'I':
        numbersInArray.push(1);
        break;
      case 'V':
        numbersInArray.push(5);
        break;
      case 'X':
        numbersInArray.push(10);
        break;
      case 'L':
        numbersInArray.push(50);
        break;
      case 'C':
        numbersInArray.push(100);
        break;
      case 'D':
        numbersInArray.push(500);
        break;
      case 'M':
        numbersInArray.push(1000);
        break;
      default:
        return 'Esse texto não são números romanos';
    }
  }
  return addNumber(numbersInArray);
}

function stringToArray(string) {
  let array = [];
  for (let key of string) {
    array.push(key);
  }
  return array;
}

function decodeRomaneNumber(string) {
  let array = stringToArray(string);
  let number = letterToNumber(array);
  return number;
}

console.log(decodeRomaneNumber('XLVII'));
// Exercicio 2
console.log('// Exercicio 2');
function itIsEven(array) {
  let evenNumbers = [];
  for (let key of array) {
    if (key % 2 === 0) {
      evenNumbers.push(key);
    }
  }
  return evenNumbers;
}

function arrayOfNumbers(vector) {
  let evenNumbers = [];
  for (let key of vector) {
    evenNumbers.push(itIsEven(key));
  }
  return evenNumbers;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));
// Exercicio 3
console.log('// Exercicio 3');
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function fruitsCount(array) {
  let basketCount = {};
  for (let key in array) {
    let count = 1;
    if (basketCount[array[key]] >= 1) {
      count += basketCount[array[key]];
    }
    basketCount[array[key]] = count;
  }
  return basketCount;
}

console.log(fruitsCount(basket));
// variavel para o exercicio 4 e 5
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
// Exercicio 4
console.log('// Exercicio 4');
let moradorBloco2Ap101 = moradores.blocoDois[moradores.blocoDois.length - 1];
let nomeCompleto = `${moradorBloco2Ap101['nome']} ${moradorBloco2Ap101['sobrenome']}`;
let enderecoNoBloco = `${moradorBloco2Ap101['andar']}° andar, apartamento ${moradorBloco2Ap101['apartamento']}`;
console.log(`O morador do bloco 2 de nome ${nomeCompleto} mora no ${enderecoNoBloco}`);
// Exercicio 5
console.log('// Exercicio 5');
console.log('// Bloco 1');
for (let index in moradores.blocoUm) {
  let moradoresBoloco1 = moradores.blocoUm[index];
  let nomeCompleto = `${moradoresBoloco1['nome']} ${moradoresBoloco1['sobrenome']}`;
  console.log(nomeCompleto);
}
console.log('// Bloco 2');
for (let index in moradores.blocoDois) {
  let moradoresBoloco2 = moradores.blocoDois[index];
  let nomeCompleto = `${moradoresBoloco2['nome']} ${moradoresBoloco2['sobrenome']}`;
  console.log(nomeCompleto);
}