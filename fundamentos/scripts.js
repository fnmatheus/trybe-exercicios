let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Exercicio 1
console.log('// Exercicio 1');
for (let number of numbers) {
  console.log(number);
};
// Exercicio 2
console.log('// Exercicio 2');
let soma = null;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
};
console.log(soma);
// Exercicio 3
console.log('// Exercicio 3');
let media = soma/numbers.length
console.log(media);
// Exercicio 4
console.log('// Exercicio 4');
if (media > 20) {
  console.log('valor maior que 20');
}
else {
  console.log('valor menor ou igual a 20');
};
// Exercicio 5
console.log('// Exercicio 5');
let maior = null;
for (let number of numbers) {
  if (number > maior) {
    maior = number;
  };
};
console.log(maior);
// Exercicio 6
console.log('// Exercicio 6');
let impares = [];
for (let number of numbers) {
  if (number % 2 != 0) {
    impares.push(number);
  };
};
if (impares.length > 0) {
  console.log(impares);
}
else {
  console.log('nenhum valor impar encontrado');
};
// Exercicio 7
console.log('// Exercicio 7');
let menor = numbers[0];
for (let number of numbers) {
  if (number < menor) {
    menor = number
  };
};
console.log(menor);
// Exercicio 8
console.log('// Exercicio 8');
let oneToTwentyFive = [];
for (let i = 1; i <= 25; i++) {
  oneToTwentyFive.push(i);
};
console.log(oneToTwentyFive);
// Exercicio 9
console.log('// Exercicio 9');
let divididoPorDois = [];
for (let i = 0; i < oneToTwentyFive.length; i++) {
  divididoPorDois.push(oneToTwentyFive[i] / 2);
};
console.log(divididoPorDois);