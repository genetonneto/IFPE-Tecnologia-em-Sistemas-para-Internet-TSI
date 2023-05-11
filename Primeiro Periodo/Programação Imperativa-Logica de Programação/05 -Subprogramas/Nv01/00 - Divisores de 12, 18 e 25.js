// Imprimir os divisores de 12, 18 e 25;

/* 
function divisores(n1,n2,n3) {
    for (let i = 1; i <= n1; i++) {
        if (n1 % i == 0) {
            console.log(i);
        }
    }

    for (let i = 1; i <= n2; i++) {
        if (n2 % i == 0) {
            console.log(i);
        }
    }

    for (let i = 1; i <= n3; i++) {
        if (n3 % i == 0) {
            console.log(i);
        }
    }
}

let n1 = 12;
let n2 = 18;
let n3 = 25;

divisores(n1, n2, n3); 

*/

function divisores(numero) {
    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
        }
    }
}

divisores(12);
console.log("...")
divisores(18);
console.log("...")
divisores(25);