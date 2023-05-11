// Implementar subprograma que dados três arrays bidimensionais, guarda no terceiro array a soma dos índices equivalentes no dois primeiros;

/* 
function elementos(array1, array2, array3) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1[i].length; j++) {
            for (k = 0; k < array1[i][j]; k++) {
                array3[i][j] = array1[i][j] + array2[i][j];
            }
        }
    }
    console.log(array3);

}

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultado = elementos(array1, array2, array3); 
*/

function elementos(array1, array2, array3) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1[i].length; j++) {
            for (k = 0; k < array1[i][j]; k++) {
                array3 = array1[i][j] + array2[i][j];
            }
        }
    }
    console.log(array3);
}

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultado = elementos(array1, array2, array3);