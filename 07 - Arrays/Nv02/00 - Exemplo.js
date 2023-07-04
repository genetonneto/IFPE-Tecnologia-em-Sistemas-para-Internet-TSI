// Exemplo do Slide: Array Tridimensional;

var numeros = [];

for (i = 0; i < 2; i++) {  //  Páginas
    numeros[i] = [];
    
    for (j = 0; j < 4; j++) {   // Linhas ↦
        numeros[i][j] = [];
        
        for (k = 0; k < 3; k++) {    // Colunas ↧
            numeros[i][j][k] = i + j + k;
            // 2 + 4 + 3 = 9
        }
    } 
    console.log(numeros);
}


let resultado = (numeros[1][2][3]);



