// Implementar subprograma que dados dois inteiros a e b cria um vetor contendo todos os elementos entre a e b
// Exemplo: entrada: 2 e 6, saída: [3, 4, 5];

function vetor(a,b,v1) {
    for (i = 3; i < b; i++) {
        v1 = i;
        console.log(v1);
    }
}

let a = 2;
let b = 6;
let v1 = [];
let resultado = vetor(a, b, v1);