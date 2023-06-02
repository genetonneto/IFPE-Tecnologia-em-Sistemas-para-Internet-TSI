// Implementar um subprograma que retorna a quantidade de elementos ímpares em um array de duas dimensões;

function elemento(arrayBi) {
    let contador = 0;
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            if (arrayBi[i][j] % 2 == 1) {
                contador ++;
            }
        }
    }
    return contador;
}

let arrayBi = [
    [2, 4, 6],
    [1, 3, 5]
];

console.log(elemento(arrayBi));