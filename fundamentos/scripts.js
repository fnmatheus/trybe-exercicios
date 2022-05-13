const salarioBruto = 3000;
let salarioComINSS = null;
let salarioLiquido = null;

if(salarioBruto <= 1556.94) {
  salarioComINSS = salarioBruto - (salarioBruto * 0.08);
}
else if(salarioBruto <= 2594.92) {
  salarioComINSS = salarioBruto - (salarioBruto * 0.09);
}
else {
  if(salarioBruto * 0.11 <= 570.88) {
    salarioComINSS = salarioBruto - (salarioBruto * 0.11);
  }
  else {
    salarioComINSS = salarioBruto - 570.88;
  }
}

if(salarioComINSS < 1903.98) {
  salarioLiquido = salarioComINSS
}
else if (salarioComINSS <= 2826.65) {
  salarioLiquido = salarioComINSS - (salarioComINSS * 0.075 - 142.80)
}
else if (salarioComINSS <= 3751.05) {
  salarioLiquido = salarioComINSS - (salarioComINSS * 0.150 - 354.80)
}
else if (salarioComINSS <= 4664.62) {
  salarioLiquido = salarioComINSS - (salarioComINSS * 0.225 - 636.13)
}
else {
  salarioLiquido = salarioComINSS - (salarioComINSS * 0.275 - 869.36)
}

console.log(salarioLiquido);