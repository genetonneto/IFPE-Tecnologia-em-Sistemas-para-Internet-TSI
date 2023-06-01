// Dados três números, encontrar o número do meio (não é o menor, nem o maior);

/*
1 > 2 -- 1 < 3 == 312
2 > 1 -- 2 < 3 == 321
3 > 1 -- 3 < 2 == 231
*/

let n1 = 4;
let n2 = 2;
let n3 = 5;

if (n1 > n2 && n1 < n3) {
    console.log(n1);
} else if (n2 > n1 && n2 < n3) {
    console.log(n2);
} else {
    console.log(n3);
}