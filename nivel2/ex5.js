//5. Maior de Três

let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let n3 = Number(prompt("Digite o terceiro número:"));
let numeros = [n1, n2, n3];
let maior = 0;
let menor = n1 + n2 + n3;

console.log(numeros);

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log("O maior número é: " + maior);
alert("O maior número é: " + maior);

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}
console.log("O menor número é: " + menor);
alert("O menor número é: " + menor);

let meio = (n1 + n2 + n3) - maior - menor;
console.log("O número do meio é: " + meio);
alert("O número do meio é: " + meio);