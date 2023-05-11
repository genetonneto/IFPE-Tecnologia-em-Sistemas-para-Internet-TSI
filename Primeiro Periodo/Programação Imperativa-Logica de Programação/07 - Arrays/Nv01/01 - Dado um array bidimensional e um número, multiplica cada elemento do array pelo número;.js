// Implementar um subprograma que dado um array bidimensional e um número, multiplica cada elemento do array pelo número;

function multiplica(arrayBi, numero) {
    let mult = 0;
    for (i = 0; i < arrayBi.length; i++) { 
        for (j = 0; j < arrayBi[i].length; j++) {
            mult = numero * arrayBi[i][j];
            console.log(mult);
        }
    }
}

let arrayBi = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
];

let numero = 5;

let resultado = multiplica(arrayBi, numero);