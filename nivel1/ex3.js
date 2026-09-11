//3. Conversor de Salário

let salario = Number(prompt("Digite seu salário mensal:"));
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas por mês:"));

let valorHora = salario / horasTrabalhadas;
let valorMinuto = valorHora / 60;
let valorSegundo = valorMinuto / 60;

console.log("Você ganha R$" + valorHora + " por hora, R$" + valorMinuto + " por minuto e R$" + valorSegundo + " por segundo")
alert("Você ganha R$" + valorHora + " por hora, R$" + valorMinuto + " por minuto e R$" + valorSegundo + " por segundo")