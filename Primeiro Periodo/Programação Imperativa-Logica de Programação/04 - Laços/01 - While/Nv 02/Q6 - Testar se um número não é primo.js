// Testar se um número é primo

let numero = 48;
let nDvisores = 0;
let contador = 0;

while (contador <= numero) {                 // Enquanto o contador for menor que o numero, true;
    contador++;                             // O contador vai de 0 até 48;
    if (numero % contador == 0) {          // Se não tiver resto dentro da divisão entre o numero e o contador; 
        nDvisores++;                      // Imprimi a quantidade de divisores que o numero 48 possui;
    }
}
console.log(nDvisores);                // Monstra a quantidade de divisores que possui entre 0 á 48;

if (nDvisores == 2) {
    console.log('primo');           // Um numero é considerado primo quando ele possui apenas 2 divisores, 1 ou ele mesmo;
} else {
    console.log('composto');      // Um numero é considerado composto quando ele possui mais de dois divisores;
}