// Implementar um subprograma que dados um array bidimensional e um número, subtrai o número de todos os elementos do array;

function elemento(arrayBi, numero) {
    let subtraçao = 0;
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            subtraçao = arrayBi[i][j] - numero;
            console.log(subtraçao);
        }
    }
}

let arrayBi = [
    [10, 20, 30, 40],
    [50, 60, 70, 80]
];

let numero = 7;
let resultado = elemento(arrayBi, numero);