//18. Remover Duplicados

const numeros = [2, 2, 3, 5, 2, 7, 6, 5, 8, 10, 15, 9, 9, 15, 19, 9, 9, 6, 11, 10];
let numerosUnicos = [0];

for (i = 0; i < numeros.length; i++){
    let repete = false;
    
    for (i2 = 0; i2 < numerosUnicos.length; i2++){
        if ((numeros[i]) === numerosUnicos[i2]){
            repete = true;
        }
    }

    if (repete === false){
        numerosUnicos.push(numeros[i]);
    }
}

numerosUnicos.shift();

console.log(numeros);
console.log(numerosUnicos);