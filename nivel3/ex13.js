//13. Pesquisa de Idade

let idadePessoas = [18, 16, 10, 26, 19, 17, 15, 23, 22, 12, 15, 14, 17, 17, 19];
let maior = idadePessoas[0];
let menor = idadePessoas[0];
let soma = 0;
let maiorIdade = 0;
let menorIdade = 0;

for (i = 0; i < idadePessoas.length; i++){
    soma += idadePessoas[i];

    if (idadePessoas[i] > maior){
        maior = idadePessoas[i];
    }

    if (idadePessoas[i] < menor){
        menor = idadePessoas[i];
    }

    if (idadePessoas[i] >= 18){
        maiorIdade++;
    } else {
        menorIdade++;
    }
}

let media = soma / idadePessoas.length;

console.log("A maior idade existente é: " + maior + ".");
console.log("A menor idade existente é: " + menor + ".");
console.log("A média das idades existentes é: " + media + ".");
console.log(maiorIdade + " pessoas são maiores de idade.");
console.log(menorIdade + " pessoas são menores de idade.");