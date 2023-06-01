// Implementar subprograma que dados dois arrays bidimensionais, copia o conteúdo do primeiro no segundo array;

function elementos(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array1[i].length; j++) {
            array2[i][j] = array1[i]
        }
    }
    return array2;
}

let array1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let array2 = [
    [false, true, 1],
    ['Geneton', 27],
    [23.5, 'Neto', true]
];

console.log(elementos(array1, array2));