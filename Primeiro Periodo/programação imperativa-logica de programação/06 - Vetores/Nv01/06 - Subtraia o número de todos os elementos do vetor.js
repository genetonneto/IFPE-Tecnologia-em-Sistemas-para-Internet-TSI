// Implementar um subprograma que dado um vetor e um número, subtraí o número de todos os elementos do vetor;

function elementos(vetor, numero) {
    let subtraçao = 0;
    for (i = 0; i < vetor.length; i++) {
        subtraçao = vetor[i] - numero 
        console.log(subtraçao);
    }
}
let vetor = [4, 6, 8, 10];
let numero = 1;
let resultado = elementos(vetor, numero);