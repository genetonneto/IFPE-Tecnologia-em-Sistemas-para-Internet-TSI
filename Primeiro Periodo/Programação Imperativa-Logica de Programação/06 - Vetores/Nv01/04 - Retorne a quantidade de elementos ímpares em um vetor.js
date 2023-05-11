// Implementar um subprograma que retorna a quantidade de elementos ímpares em um vetor; 

function elementos(impares) {
    let nImpares = 0;
    for (let i = 0; i < impares.length; i++) {
        if (impares[i] % 2 == 1) {
            nImpares++;
        }
    }
    return nImpares;
}

let impares = [1, 3, 5, 6, 8];
let resultado = elementos(impares);
console.log(resultado);