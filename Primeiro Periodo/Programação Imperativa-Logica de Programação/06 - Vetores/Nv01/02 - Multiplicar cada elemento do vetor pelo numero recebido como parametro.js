// Implementar um subprograma que dados um vetor e um número, multiplica cada elemento do vetor pelo número recebido como parâmetro;

let multiplica = 0;

function elementos(vetor, numero) {
    for (let i = 0; i < vetor.length; i++) {
        multiplica = numero * vetor[i];
        console.log(multiplica)
    }
}

let numero = 2;
let vetor = [1, 2, 3, 4, 5];
let resultado = elementos(vetor, numero);
