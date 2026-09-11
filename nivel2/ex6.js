//6. Triângulos

alert("Sobre o triângulo, informe:");
let l1 = Number(prompt("O tamanho do primeiro lado:"));
let l2 = Number(prompt("O tamanho do segundo lado:"));
let l3 = Number(prompt("O tamanho do terceiro lado:"));
let lados = [l1, l2, l3];
console.log(lados);

if ((l1 === 0) || (l2 === 0) || l3 === 0) {
    console.log("Esses valores não podem formar um triângulo.");
    alert("Esses valores não podem formar um triângulo.");

} else {

    if ((l1 !== l2) && (l1 !== l3) && (l2 !==l3)){
        console.log("Esses valores formam um triângulo escaleno.");
        alert("Esses valores formam um triângulo escaleno.");
    } else if ((l1 === l2) && (l2 === l3)) {
        console.log("Esses valores formam um triângulo equilátero.");
        alert("Esses valores formam um triângulo equilátero.");
    } else {
        console.log("Esses valores formam um triângulo isósceles.");
        alert("Esses valores formam um triângulo isósceles.");
    }
}