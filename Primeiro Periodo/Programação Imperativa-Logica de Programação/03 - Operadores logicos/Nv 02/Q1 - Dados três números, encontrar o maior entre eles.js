// Dados três números, encontrar o maior entre eles;

/* 
a > b > c 
a > c > b 

b > a > c
b > c > a

c > a > b
c > b > a
*/

// EX¹:
let a = 30;
let b = 20;
let c = 120;

if ((a > b && b > c) && (a > c && c < b)) {
    console.log(a);
} else if ((b > a && a > c) && (b > c && c < a)) {
    console.log(b);
} else if ((c > a && a > b) && (c > b && b < a)) {
    console.log(c);
}


// EX²:
// let a = 3;
// let b = 20;
// let c = 100;

// if (a > b && a > c){
// 	console.log(a)
// } else if (b > a && b > c){
// 	console.log(b)
// } else {
// 	console.log(c)
// }