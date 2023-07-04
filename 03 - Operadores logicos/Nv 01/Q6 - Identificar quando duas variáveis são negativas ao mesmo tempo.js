// Identificar quando duas variáveis são negativas ao mesmo tempo;

let n1 = -4;
let n2 = -2;

if (n1 < 0 && n2 < 0) {
    console.log (n1 + " e " + n2 + " sao numero negativos ao mesmo tempo");
} else if (n1 >= 0 && n2 >= 0) {
    console.log(n1 + " e " + n2 + " sao numeros positivos ao mesmo tempo");
} else if (n1 < 0 && n2 >= 0) {
    console.log(n1 + " e negativo " + n2 + " e positivo");
} else { 
    console.log(n1 + " e positivo e " + n2 + " e negativo");
}
