// Dados três números quaisquer, imprimi-los em ordem decrescente;

let a = 12;
let b = 20;
let c = 40;

if (c > b && b > a) {   
    console.log(c,b,a);
} else if (c > a && a > b) {
    console.log(c,a,b);
} else if (b > c && c > a) {
    console.log(b,c,a);
} else if (b > a && a > c) {
    console.log(b,a,c);
} else if (c > a && a > b) {
    console.log(c,a,b);
} else if (c > b && b > a) {
    console.log(c,b,a);
}

/* 
3,2,1 == cba
3,1,2 == cab
2,3,1 == bca
2,1,3 == bac
3,1,2 == cab
3,2,1 == cba
*/