// Implementar um subprograma que dados dois vetores, copia o conteúdo do primeiro no segundo vetor (elemento por elemento) na ordem inversa;

// function elementos(v1, v2) {
//     for (i = 0; i < v1.length; i++) {
//         v2[i] = v1[i];
//     }
//     return v2.reverse();

// }

// let v1 = [1, 2, 3, 4];
// let v2 = [5, 4, 3, 'Neto'];
// console.log(elementos(v1,v2));

function parametro(v1, v2) {

    for (i = 0; i < v1.length; i++) {
        v2[i] = v1[i];
    }

    for (i = v2.length - 1; i >= 0; i--) {
        console.log(v2[i]);
    }

}

let v1 = [1, 3, 5, -2];
let v2 = [1, 2, 3, 4];
let resultado = parametro(v1, v2);