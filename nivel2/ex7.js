//7. Folha de Pagamento

let horasTrabalhadas = Number(prompt("Digite suas horas trabalhadas por mês:"));
let valorHora = Number(prompt("Digite o valor da hora:"));
console.log("Horas trabalhadas: " + horasTrabalhadas);
console.log("Valor da hora: R$" + valorHora);


let salarioBruto = horasTrabalhadas * valorHora;

let valorINSS = salarioBruto * 0.08;
let valeTransporte = salarioBruto * 0.06;
let impostoRenda = salarioBruto * 0.075;

let salarioLiquido = salarioBruto - valorINSS - valeTransporte - impostoRenda;

alert("Salário bruto: R$" + salarioBruto + "\nValor do INSS: R$" + valorINSS + "\nValor do Vale Transporte: R$" + valeTransporte + "\nValor do Imposto de Renda: R$" + impostoRenda + "\nSalário líquido: R$" + salarioLiquido);
console.log("Salário bruto: R$" + salarioBruto + "\nValor do INSS: R$" + valorINSS + "\nValor do Vale Transporte: R$" + valeTransporte + "\nValor do Imposto de Renda: R$" + impostoRenda + "\nSalário líquido: R$" + salarioLiquido);