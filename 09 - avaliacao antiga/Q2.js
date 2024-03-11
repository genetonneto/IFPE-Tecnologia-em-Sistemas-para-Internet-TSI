/*
(2.5) Implemente programas capazes de:
a) (0.5) [Arrays] Contar quantas vezes um número ocorre dentro de um array de duas dimensões;
b) (0.5) [Arrasy x Subprogramas] Modificar o código da letra anterior para transformá-lo em um subprograma que, dado um array de duas dimensões e um número como parâmetros, retorne quantas vezes o número ocorre no array;
*/

// Bidimensional:
function parametro(array, numero) {

    let cont = 0;

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            if (numero == array[i][j]) {
                cont++
            }
        }
    }
    return cont;

}

let array = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
let numero = 1;
let resultado = parametro(array, numero);
console.log("Quantidade de vezes que o numero ocorre dentro do array: ",resultado);


/*
c) (1.0) [Arrays] Dado um array de três dimensões, contar quantos elementos ímpares há nele;
d) (0.5) [Arrasy x Subprogramas] Modificar o código da letra anterior para transformá-lo em um subprograma que, dada um array tridimensional como parâmetro, retornar quantos elementos ímpares há nele.
*/

// Tridimensional:
function parametroTri(arrayTri) {

    let impares = 0;

    for (i = 0; i < arrayTri.length; i++) {
        for (j = 0; j < arrayTri[i].length; j++) {
            for (k = 0; k < arrayTri[i][j].length; k++) {

                if (arrayTri[i][j][k] % 2 != 0) {
                    impares++;
                }
            }
        }
    }
    return impares;
}

let arrayTri = [
    [
        [1, 1, 1],
        [1, 2, 2],
        [2, 2, 2]
    ],

    [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ],

    [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ]
];

let resultadoTri = parametroTri(arrayTri);
console.log("Quantidade de elementos impares: ",resultadoTri); 