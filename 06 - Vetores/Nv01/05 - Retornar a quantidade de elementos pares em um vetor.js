// Implementar um subprograma que retorna a quantidade de elementos pares em um vetor;

function elementos(pares) {
    let nPares = 0;
    for (i = 0; i < pares.length; i++) {
        if (pares[i] % 2 == 0) {
            nPares++;
        }
    }
    return nPares;
}
let pares = [2, 4, 6, 7, 9, 10];
console.log(elementos(pares));