// Receber como parâmetro três números e retornar o menor valor entre eles;

function menor(n1,n2,n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3){
        return n2;
    } else {
        return n3;
    }
}

let resultado = menor(24,17,9);
console.log(resultado);