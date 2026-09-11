//8. Campeonato

let vitorias = Number(prompt("Digite o número de vitórias:"));
let empates = Number(prompt("Digite o número de empates:"));
let derrotas = Number(prompt("Digite o número de derrotas:"));

let partidasJogadas = vitorias + empates + derrotas;
let pontuacaoObtida = vitorias * 2 + empates * 1;
let pontuacaoMaxima = partidasJogadas * 2;
let aproveitamento = (pontuacaoObtida * 100) / pontuacaoMaxima;

alert(`Pontuação: ${pontuacaoObtida} \nAproveitamento: ${aproveitamento}%`);

if (aproveitamento >= 90) {
    alert("O time foi excelente!");
} else if (aproveitamento >= 70) {
    alert("O time foi bem!");
} else if (aproveitamento >= 50) {
    alert("O time foi regular.");
} else {
    alert("O time foi péssimo.");
}