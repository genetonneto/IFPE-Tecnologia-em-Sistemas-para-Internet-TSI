// Dados quatro números, contar quantos entre eles são divisíveis por 5 e 7 ao mesmo tempo;

let n1 = 35;
let n2 = 70;
let n3 = 105;
let n4 = 140;
let count = 0;

if (n1 % 5 == 0 && n1 % 7 == 0) {
    count++;
    
    if (n2 % 5 == 0 && n2 % 7 == 0) {
        count++;
    }

    if (n3 % 5 == 0 && n3 % 7 == 0) {
        count++;
    }

    if (n4 % 5 == 0 && n4 % 7 == 0) {
        count++;
    }
} 

console.log(count);
