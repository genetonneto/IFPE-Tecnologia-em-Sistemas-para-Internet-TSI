// Identificar se há exatamente (apenas) um número negativo entre três números dados;

/*
 n1  n2  n3 ==> Todos positivos
-n1 -n2 -n3 ==> Todos negativos

-n1  n2  n3
-n1 -n2  n3
-n1  n2 -n3

n1 -n2 -n3
n1 -n2  n3
n1  n2 -n3
*/

let n1 = 1;
let n2 = 2;
let n3 = 3;

if (n1 > 0 && n2 > 0 && n3 > 0) {
    console.log(n1,n2,n3, " Todos os numeros sao positivos");
} else if (n1 < 0 && n2 < 0 && n3 < 0) {
    console.log(n1,n2,n3, " Todos os numeros sao negativos");
} else if (n1 < 0 && n2 > 0 && n3 > 0) {
    console.log("Apenas um numero negativo = " ,n1);
} else if (n1 < 0 && n2 < 0 && n3 > 0) {
    console.log("Apenas dois numeros negativos = " ,n1,n2);
} else if (n1 < 0 && n2 > 0 && n3 < 0) {
    console.log("Apenas dois numeros negativos = " ,n1,n3);
} else if (n1 > 0 && n2 < 0 && n3 < 0) {
    console.log("Apenas dois numeros negativos = " ,n2,n3);
} else if (n1 > 0 && n2 < 0 && n3 > 0) {
    console.log("Apenas um numero negativo = " ,n2);
} else {
    console.log("Apenas um numero negativo = " ,n3);    
}