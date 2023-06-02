// Implementar subprograma que retorna a soma todos os elementos de um vetor;

let soma = 0;

function elementos(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];
    }
    return soma;
}

let vetor = [1, 2, 3, 4, 5];
let resultado = elementos(vetor);
console.log(resultado);