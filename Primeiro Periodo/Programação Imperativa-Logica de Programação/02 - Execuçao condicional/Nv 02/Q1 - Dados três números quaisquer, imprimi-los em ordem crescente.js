// Dados três números quaisquer, imprimi-los em ordem crescente;

let a = 1;
let b = 2;
let c = 3;

if (a < b && b < c) {
    console.log(a,b,c);
} else if (a < c && c < b) {
    console.log(a,c,b);
} else if (b < a && a < c) {
    console.log(b,a,c)
} else if (b < c && c < a) {
    console.log(b,c,a);
} else if (c < a && a < b) {
    console.log(c,a,b);
} else if (c < b && b < a) {
    console.log(c,b,a);
}
/* 
1,2,3 == abc
1,3,2 == acb
2,1,3 == bac
2,3,1 == bca
3,1,2 == cab
3,2,1 == cba
*/