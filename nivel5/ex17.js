//17. Ranking

const alunos = [
    {nome: "Heloisa", nota: 10},
    {nome: "João", nota: 8.5},
    {nome: "Pedro", nota: 9},
    {nome: "Luiz", nota: 7},
    {nome: "Zara", nota: 7.5},
    {nome: "Gustavo", nota: 6},
    {nome: "Daniela", nota: 5},
    {nome: "Giovana", nota: 8},
    {nome: "Thiago", nota: 4.5},
    {nome: "Jorge", nota: 3}
];

let ordemDecrescente = [];
let alunosFaltando = [];

for (i = 0; i < alunos.length; i++){
    alunosFaltando.push({nome: alunos[i].nome, nota: alunos[i].nota});
}

for (i = 0; i < alunos.length; i++){
    let iMaior = 0;

    for (i2 = 0; i2 < alunos.length; i2++){
        if (alunosFaltando[i2].nota >= alunosFaltando[iMaior].nota){
            iMaior = i2;
        }
    }

    ordemDecrescente.push({nome: alunosFaltando[iMaior].nome, nota: alunosFaltando[iMaior].nota});
    alunosFaltando[iMaior].nota = -1;
}

console.table(ordemDecrescente);