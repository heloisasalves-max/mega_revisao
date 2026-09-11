//4. Caixa Eletrônico

let valor = Number(prompt("Digite um valor inteiro:"));

let resto200 = valor % 200;
let notas200 = (valor - resto200) / 200;

let resto100 = resto200 % 100;
let notas100 = (resto200 - resto100) / 100;

let resto50 = resto100 % 50;
let notas50 = (resto100 - resto50) / 50;

let resto20 = resto50 % 20;
let notas20 = (resto50 - resto20) / 20;

let resto10 = resto20 % 10;
let notas10 = (resto20 - resto10) / 10;

let resto5 = resto10 % 5;
let notas5 = (resto10 - resto5) / 5;

let resto2 = resto5 % 2;
let notas2 = (resto5 - resto2) / 2;

let resto1 = resto2 % 1;
let notas1 = (resto2 - resto1) / 1;

console.log("R$" + valor + " são " + notas200 + " nota(s) de 200, \n" + notas100 + " nota(s) de 100, \n" + notas50 + " nota(s) de 50, \n" + notas20 + " nota(s) de 20, \n" + notas10 + " nota(s) de 10, \n" + notas5 + " nota(s) de 5, \n" + notas2 + " nota(s) de 2 e \n" + notas1 + " nota(s) de 1.")
alert("R$" + valor + " são " + notas200 + " nota(s) de 200, \n" + notas100 + " nota(s) de 100, \n" + notas50 + " nota(s) de 50, \n" + notas20 + " nota(s) de 20, \n" + notas10 + " nota(s) de 10, \n" + notas5 + " nota(s) de 5, \n" + notas2 + " nota(s) de 2 e \n" + notas1 + " nota(s) de 1.")