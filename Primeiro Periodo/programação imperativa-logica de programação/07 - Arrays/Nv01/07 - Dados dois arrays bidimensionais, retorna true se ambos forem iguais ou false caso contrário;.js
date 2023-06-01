// Implementar um subprograma que dados dois arrays bidimensionais, retorna true se ambos forem iguais ou false caso contrário;


function elementos(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2[i].length; j++) {
            if (array1[i][j] != array2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

let array1 = [
    [1, 22, 3, 4],
    [5, 6, 7, 8]
];

let array2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

console.log(elementos(array1, array2));