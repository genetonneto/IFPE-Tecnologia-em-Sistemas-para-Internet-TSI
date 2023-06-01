// Dados quatro números, contar quantos entre eles são divisíveis por 3 ou 4

let n1 = 12;
let n2 = 20;
let n3 = 48;
let n4 = 96;

let count = 0;

if (n1 % 3 == 0 && n1 % 4 == 0) {
    count++;

    if (n2 % 3 == 0 && n2 % 4 == 0) {
        count++;
    }
    
    if (n3 % 3 == 0 && n3 % 4 == 0) {
        count++;
    }
    
    if (n4 % 3 == 0 && n4 % 4 == 0) {
        count++;
    }    
} 
console.log(count);