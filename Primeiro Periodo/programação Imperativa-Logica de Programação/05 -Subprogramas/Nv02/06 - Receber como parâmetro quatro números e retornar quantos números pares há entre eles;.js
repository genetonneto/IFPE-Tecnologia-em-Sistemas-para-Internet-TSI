// Receber como parâmetro quatro números e retornar quantos números pares há entre eles;

function pares(n1, n2, n3, n4, i = 0) {
    if (n1 % 2 == 0) {
        i++;
    } if (n2 % 2 == 0) {
        i++;
    } if (n3 % 2 == 0) {
        i++;
    } if (n4 % 2 == 0){
        i++;
    }
    return i;
}
console.log(pares(2,3,4,6))