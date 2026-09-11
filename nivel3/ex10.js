//10. Sequência de Fibonacci

let seqFibonacci = [0, 1];

console.log("Sequência de Fibonacci:");
console.log("1º termo: " + seqFibonacci[0]);
console.log("2º termo: " + seqFibonacci[1]);

for (i = 2; i < 30; i++){
    seqFibonacci.push(seqFibonacci[i - 1] + (seqFibonacci[i - 2]));
    console.log((i + 1) + "º termo: " + seqFibonacci[i]);
}