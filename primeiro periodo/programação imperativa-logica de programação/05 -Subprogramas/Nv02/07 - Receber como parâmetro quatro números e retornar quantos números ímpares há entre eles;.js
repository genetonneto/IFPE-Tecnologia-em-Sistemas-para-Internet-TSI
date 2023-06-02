// Receber como parâmetro quatro números e retornar quantos números ímpares há entre eles;

function impares(n1, n2, n3, n4, i = 0) {
    if (n1 % 2 == 1) {
        i++;
    } if (n2 % 2 == 1) {
        i++;
    } if (n3 % 2 == 1) {
        i++;
    } if (n4 % 2 == 1) {
        i++;
    }
    return i;
}
console.log(impares(1,21,3,4));