//11. Número Primo

let numero = Number(prompt("Digite um número para conferir se é primo ou não:"));
let divisores = 0;
let qtDivisoes = 0;

for (i = 2; i < numero; i++){
    if (numero % i === 0){
        divisores++;
    }
    qtDivisoes++;
}

if (divisores === 0){
    alert(numero + " é primo.");
    console.log(numero + " é primo.");
} else {
    alert(numero + " não é primo.");
    console.log(numero + " não é primo.");
}

alert(qtDivisoes + " divisões foram feitas.");
console.log(qtDivisoes + " divisões foram feitas.");