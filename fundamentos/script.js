const body = document.querySelector('body');
// Part 1
// Exercicio 1
let mainH1 = document.createElement('h1');
mainH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(mainH1);
// Exercicio 2
let tagMain = document.createElement('main');
tagMain.classList.add('main-content');
body.appendChild(tagMain);
// Exercicio 3
let centerContent = document.createElement('section');
centerContent.classList.add('center-content');
tagMain.appendChild(centerContent);
// Exercicio 4
let textMain = document.createElement('p');
textMain.innerText = 'As águas-vivas, ou medusas, são animais marinhos pertencentes ao filo Cnidaria, classe Scyphozoa. O corpo tem a forma de um sino margeado por tentáculos e apresenta uma organização simples, havendo uma cavidade gastrovascular central com uma única abertura que atua como boca e ânus. A parede é formada pela epiderme (derivada da ectoderme) e pela gastroderme (derivada da endoderme), intercaladas por um material gelatinoso chamado de mesogleia.';
centerContent.appendChild(textMain);
// Exercicio 5
let leftContent = document.createElement('section');
leftContent.classList.add('left-content');
tagMain.appendChild(leftContent);
// Exercicio 6
let rightContent = document.createElement('section');
rightContent.classList.add('right-content');
tagMain.appendChild(rightContent);
// Exercicio 7
let leftImage = document.createElement('img');
leftImage.src = 'https://picsum.photos/200';
leftImage.classList.add('small-image');
leftContent.appendChild(leftImage);
// Exercicio 8
let rightList = document.createElement('ol');
rightContent.appendChild(rightList);

let itens = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for(let key of itens) {
  let rightListItem = document.createElement('li');
  rightListItem.innerText = key;
  rightList.appendChild(rightListItem);
}
// Exercicio 9
for(let index = 1; index <= 3; index += 1) {
  let createH3 = document.createElement('h3');
  tagMain.appendChild(createH3)
}
// Parte 2
// Exercicio 1
mainH1.classList.add('title');
// Exercicio 2
for(let index = 0; index < document.getElementsByTagName('h3').length; index += 1) {
  document.getElementsByTagName('h3')[index].classList.add('description');
}
// Exercicio 3
let identifyMain = document.querySelector('.main-content');
let identifyLeftContent = document.querySelector('.left-content');
identifyMain.removeChild(identifyLeftContent);
// Exercicio 4
let identifyRightContent = document.querySelector('.right-content');
identifyRightContent.style.margin = 'auto';
// Exercicio 5
let identifyCenterContent = document.querySelector('.center-content');
identifyCenterContent.style.background = 'green';
// Exercicio 6
let identifyOl = document.querySelector('ol');
for(let index = 1; index <= 2; index += 1) {
  identifyOl.removeChild(identifyOl.lastChild);
}