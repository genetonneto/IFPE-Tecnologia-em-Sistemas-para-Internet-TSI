// Implementar um subprograma que computa e retorna o valor da multiplicação de dois vetores;

/* 
let v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let v2 = v1;
let newV1 = v1.map(item1 => item1 * 2);
console.log(newV1); 
let newV2 = v2.map(item2 => item2 * 3);
console.log(newV2);  
*/

// MULTIPLICANDO UM VETOR PELO OUTRO;
function vetores(v1, v2) {
    for (i = 0; i < v1.length; i++) {
        v1[i] *= v2[i];
    }
    return v1;
}

let v1 = [1, 2, 3, 4, 5];
let v2 = [2, 3, 6, 5, 5];
console.log(vetores(v1, v2));