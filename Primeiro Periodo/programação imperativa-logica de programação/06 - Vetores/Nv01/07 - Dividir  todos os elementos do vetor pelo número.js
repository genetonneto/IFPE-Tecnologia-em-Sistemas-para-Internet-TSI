// Implementar um subprograma que dado um vetor e um número, divide todos os elementos do vetor pelo número;

function elementos(vetor, numero) {
    let dividir = 0;
    for (i = 0; i < vetor.length; i++) {
        dividir = vetor[i] / numero;
        console.log(dividir);
    }
}

let vetor = [10, 20, 30];
let numero = 2;
let resultado = elementos(vetor, numero);

