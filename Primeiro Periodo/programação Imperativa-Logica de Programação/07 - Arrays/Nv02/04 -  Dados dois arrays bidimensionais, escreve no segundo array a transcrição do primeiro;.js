/* Implementar um subprograma que dados dois arrays bidimensionais, escreve no segundo array a transcrição do primeiro;
Exemplo: b[linha,coluna] = a[coluna,linha]
 */

function array(arrayB1, arrayB2) {
    for (i = 0; i < arrayB1.length; i++) {
        for (j = 0; j < arrayB1[i].length; j++) {
            arrayB2[i][j] = arrayB1[j][i];
            console.log(arrayB2);
        }
    }
}

let arrayB1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arrayB2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultado = (array(arrayB1, arrayB2));
// console.log(array(arrayB1, arrayB2))