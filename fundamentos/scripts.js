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