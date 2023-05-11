// Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro para segundo vetor (elemento por elemento);

function vetor(v1, v2) {
    for (let i = 0; i < v1.length; i++) {
        v2[i] = v1[i];
    }
    return v2;
}

let v1 = [1, 2, 3, 'Vetor 1'];
let v2 = [3, 2, 1, 'Neto'];
let resultado = vetor(v1, v2);
console.log(resultado);