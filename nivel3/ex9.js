//9. Estatística

let numeros = [10, -12, 15, 12, -20, 16, -18, 21, -5, -8, 9, 17, 19, -15, 11, -20, 15, 13, 18, 20];
let soma = 0;
let maior = numeros[0];
let menor = numeros[0];
let qtPares = 0;
let qtImpares = 0;
let qtPositivos = 0;
let qtNegativos = 0;

for (i = 0; i < numeros.length; i++){
    soma += numeros[i];

    if (numeros[i] > maior){
        maior = numeros[i];
    }

    if (numeros[i] < menor){
        menor = numeros[i];
    }

    if (numeros[i] % 2 === 0){
        qtPares++;
    } else {
        qtImpares++;
    }

    if (numeros[i] > 0){
        qtPositivos++;
    } else {
        qtNegativos++;
    }
}

let media = soma / numeros.length;

console.log(numeros);
console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Maior: " + maior);
console.log("Menor: " + menor);
console.log("Qt. de pares: " + qtPares);
console.log("Qt. de ímpares: " + qtImpares);
console.log("Qt. de positivos: " + qtPositivos);
console.log("Qt. de negativos: " + qtNegativos);