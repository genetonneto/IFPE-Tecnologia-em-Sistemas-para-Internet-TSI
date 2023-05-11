// Implementar um subprograma que dados dois arrays bidimensionais, retorna qual deles possui a maior soma de seus elementos;

function array(arrayB1, arrayB2) {

    somaB1 = 0;
    somaB2 = 0;

    for (i = 0; i < arrayB1.length; i++) {
        for (j = 0; j < arrayB1[i].length; j++) {
            somaB1 += arrayB1[i][j];
            somaB2 += arrayB2[i][j];
        }
    }

    if (somaB1 > somaB2) {
        return somaB1; 
    } else {
        return somaB2;
    }
}

let arrayB1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arrayB2 = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];

console.log(array(arrayB1, arrayB2));