// Implementar um subprograma que dados dois vetores, retorna qual deles possui a maior soma de seus elementos;

function numero(v1, v2) {

    let somaV1 = 0;
    for (i = 0; i < v1.length; i++) {
        somaV1 += v1[i];
    }

    let somaV2 = 0;
    for (i = 0; i < v2.length; i++) {
        somaV2 += v2[i];
    }

    if (somaV1 > somaV2) {
        return somaV1;
    } else if (somaV2 > somaV1) {
        return somaV2;
    } else {
        return 'Resultado igual';
    }

}

let v1 = [1, 2, 3, 4];
let v2 = [2, 4, 6, 7];
let resultado = numero(v1, v2)
console.log(resultado);