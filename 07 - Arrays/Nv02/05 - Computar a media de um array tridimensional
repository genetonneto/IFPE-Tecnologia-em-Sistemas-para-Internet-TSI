// Implementar um subprograma que dado um array tridimensional, computa a média de seus elementos;
// Dica: são necessários três for’s aninhados para computar a média

function parametro(array) {

    let somaMedia = 0;
    let elementos = 0;

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            for (c = 0; c < array[i][j].length; c++) {
                somaMedia += array[i][j][c];
                elementos++;
            }
        }
    }
    
    let resultadoSomaMedia = somaMedia / elementos;
    console.log(resultadoSomaMedia); 

}

let array = [
    [
        [10, 10, 10],
        [7, 7, 7],
        [6, 5, 4]
    ],

    [
        [10, 10, 10],
        [7, 7, 7],
        [6, 5, 4]
    ],

    [
        [10, 10, 10],
        [7, 7, 7],
        [6, 5, 4]
    ]
];

let resultado = parametro(array);