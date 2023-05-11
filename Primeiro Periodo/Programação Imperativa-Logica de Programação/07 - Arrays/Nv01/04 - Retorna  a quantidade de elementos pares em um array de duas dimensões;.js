// Implementar um subprograma que retorna  a quantidade de elementos pares em um array de duas dimensões;

function elementos(arrayBi) {
    let contador = 0;
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            if (arrayBi[i][j] % 2 == 0) {
                contador++;
            }
        }
    }
    return contador;
}

let arrayBi = [
    [2, 4, 6, 8, 10],
    [1, 3, 7]
];
console.log(elementos(arrayBi));