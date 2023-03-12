// Dados quatro notas, computar e classificar o valor da média das notas de um  estudante como aprovado (> 6), reprovado (< 4) e recuperação (caso contrário);

let nota1 = 8;
let nota2 = 4;
let nota3 = 4;
let nota4 = 5;
let media = nota1 + nota2 + nota3 + nota4 / 4;

if (media >= 6) {
    console.log("Aluno aprovado com media: " + media);
} else if (media <= 4) {
    console.log("Aluno reprovado com media: " + media);
} else {
    console.log("Aluno em recuperação com media: " + media);
}