//1. Calculadora Completa

let n1 = Number(prompt("Insira o primeiro número:"));
let n2 = Number(prompt("Insira o segundo número:"));

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2;
let resto = n1 % n2;
let potenciacao = n1 ** n2;

console.log(n1 + " + " + n2 + " = " + soma);
alert(n1 + " + " + n2 + " = " + soma);

console.log(n1 + " - " + n2 + " = " + subtracao);
alert(n1 + ' - ' + n2 + ' = ' + subtracao);

console.log(n1 + " * " + n2 + " = " + multiplicacao);
alert(n1 + ' * ' + n2 + ' = ' + multiplicacao);

console.log(n1 + " / " + n2 + " = " + divisao);
alert(n1 + ' / ' + n2 + ' = ' + divisao);

console.log("O resto da divisão entre " + n1 + " e " + n2 + " é " + resto);
alert('O resto da divisão entre ' + n1 + ' e ' + n2 + ' é ' + resto);

console.log(n1 + " ^ " + n2 + " = " + potenciacao);
alert(n1 + ' ^ ' + n2 + ' = ' + potenciacao);