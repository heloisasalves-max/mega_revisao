//20. Sistema Acadêmico

const alunos = [
    {Nome: "Anabelle", RA: 328383, Nota1: 10, Nota2: 8, Nota3: 9, Media: 0, Status: ""},
    {Nome: "Beatriz", RA: 328384, Nota1: 8.5, Nota2: 7.5, Nota3: 8, Media: 0, Status: ""},
    {Nome: "Carlos", RA: 328385, Nota1: 9, Nota2: 8.5, Nota3: 9.5, Media: 0, Status: ""},
    {Nome: "Daniel", RA: 328386, Nota1: 7, Nota2: 6.5, Nota3: 7.5, Media: 0, Status: ""},
    {Nome: "Ester", RA: 328387, Nota1: 7.5, Nota2: 7, Nota3: 8, Media: 0, Status: ""},
    {Nome: "Felipe", RA: 328388, Nota1: 6, Nota2: 5.5,Nota3: 6.5, Media: 0, Status: ""},
    {Nome: "Gabriela", RA: 328389, Nota1: 5, Nota2: 4, Nota3: 6, Media: 0, Status: ""},
    {Nome: "Henrique", RA: 328390, Nota1: 8, Nota2: 7.5, Nota3: 8.5, Media: 0, Status: ""},
    {Nome: "Isabela", RA: 328391, Nota1: 4, Nota2: 3.5, Nota3: 4.5, Media: 0, Status: ""},
    {Nome: "João", RA: 328392, Nota1: 3, Nota2: 2.5, Nota3: 3.5, Media: 0, Status: ""},
    {Nome: "Karla", RA: 328393, Nota1: 9.5, Nota2: 9, Nota3: 10, Media: 0, Status: ""},
    {Nome: "Lucas", RA: 328394, Nota1: 6.5, Nota2: 6, Nota3: 7, Media: 0, Status: ""},
    {Nome: "Mariana", RA: 328395, Nota1: 7.5, Nota2: 8, Nota3: 7, Media: 0, Status: ""},
    {Nome: "Nicolas", RA: 328396, Nota1: 8, Nota2: 7.5, Nota3: 8.5, Media: 0, Status: ""},
    {Nome: "Olivia", RA: 328397, Nota1: 9, Nota2: 8.5, Nota3: 9.5, Media: 0, Status: ""},
    {Nome: "Paulo", RA: 328398, Nota1: 5.5, Nota2: 5, Nota3: 6, Media: 0, Status: ""},
    {Nome: "Quintino", RA: 328399, Nota1: 6, Nota2: 5.5, Nota3: 6.5, Media: 0, Status: ""},
    {Nome: "Rafaela", RA: 328400, Nota1: 7, Nota2: 6.5, Nota3: 7.5, Media: 0, Status: ""},
    {Nome: "Samuel", RA: 328401, Nota1: 8.5, Nota2: 8, Nota3: 9, Media: 0, Status: ""},
    {Nome: "Tatiana", RA: 328402, Nota1: 10, Nota2: 10, Nota3: 10, Media: 0, Status: ""}
];
let maiorMedia = 0;
let iMelhor = 0;
let menorMedia = 10;
let iPior = 0;
let somaMedias = 0
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (i = 0; i < alunos.length; i ++){
    alunos[i].Media = ((alunos)[i].Nota1 + alunos[i].Nota2 + alunos[i].Nota3) / 3;
    somaMedias += alunos[i].Media;

    if (alunos[i].Media >= 7){
        alunos[i].Status = "Aprovado";
        aprovados++;
    } else if (alunos[i].Media >= 5){
        alunos[i].Status = "Recuperação";
        recuperacao++;
    } else {
        alunos[i].Status = "Reprovado";
        reprovados++;
    }

    if (alunos[i].Media > maiorMedia){
        maiorMedia = alunos[i].Media;
        iMelhor = i;
    }

    if (alunos[i].Media < menorMedia){
        menorMedia = alunos[i].Media;
        iPior = i;
    }
}

console.table(alunos);
console.log(`Média da turma: ${somaMedias / alunos.length}.`);
console.log();
console.log(`Melhor aluno da turma: ${alunos[iMelhor].Nome}, com ${maiorMedia} de média.`);
console.log(`Pior aluno da turma: ${alunos[iPior].Nome}, com ${menorMedia} de média.`);
console.log();
console.log(`Alunos aprovados: ${aprovados}.`);
console.log(`Alunos de recuperação: ${recuperacao}.`);
console.log(`Alunos reprovados: ${reprovados}.`);
console.log();
console.log(`Percentual de aprovação: ${aprovados / alunos.length * 100}%`);