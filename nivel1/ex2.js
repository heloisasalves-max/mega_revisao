//2. Conversor de Tempo

let segundos = Number(prompt("Digite a quantidade de segundos:"));

let horasResto = segundos % 3600;
let horas = (segundos - horasResto) / 3600;

let minutosResto = horasResto % 60;
let minutos = (horasResto - minutosResto) / 60;

let segundos2 = minutosResto;

console.log(segundos + " segundos são " + horas + " horas " + ", " + minutos + " minutos e " + segundos2 + " segundos.");
alert(segundos + " segundos são " + horas + " hora(s) " + ", " + minutos + " minuto(s) e " + segundos2 + " segundo(s).");