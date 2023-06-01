// Implementar um subprograma que dado um array bidimensional e um número, divide todos os elementos do array pelo número;

function elemento(arrayBi, numero) {
    let divide = 0;
    for (i = 0; i < arrayBi.length; i++) {
        for (j = 0; j < arrayBi[i].length; j++) {
            divide = arrayBi[i][j] / numero;
            console.log(divide);
        }
    }
}

let arrayBi = [
    [4, 8, 12, 18, 20],
    [22, 24, 32, 40]
];

let numero = 4;
let resultado = elemento(arrayBi, numero);