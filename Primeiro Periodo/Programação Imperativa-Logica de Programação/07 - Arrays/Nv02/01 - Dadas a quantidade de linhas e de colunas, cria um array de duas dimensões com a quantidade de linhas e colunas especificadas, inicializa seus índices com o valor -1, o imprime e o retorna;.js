// Implementar um subprograma que dadas a quantidade de linhas e de colunas, cria um array de duas dimensões com a quantidade de linhas e colunas especificadas, inicializa seus índices com o valor -1, o imprime e o retorna;

function inicializar(linhas, colunas) {
    array = [];
    if (linhas < 1 || colunas < 1) {
        return array;
    }
    for (i = 0; i < linhas; i++) {
        array[i] = [];
        for (j = 0; j < colunas; j++) {
            array[i][j] = -1;
        }
    }
    return array;
}

var resultado = inicializar(2, 5);
console.log(resultado);