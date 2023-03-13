// Identificar se duas variáveis são ímpares e positivas ao mesmo tempo.

/*
POSSIBILIDADES: 

impar e impar ==> positivo e positivo
par e par  ==> positivo e positivo
impar e par ==> positivo e positivo
par e impar ==> positivo e positivo

impar e impar = negativo e negativo
par e par ==> negativo e negativo
impar e par ==> negativo e negativo
par e impar ==> negativo e negativo

impar e impar ==> positivo e negativo
par e par ==> positivo e negativo
impar e par ==> positivo e negativo
par e impar ==> positivo e negativo

impar e impar ==> negativo e positico
par e par ==> negativo e positico
impar e par ==> negativo e positico
par e impar ==> negativo e positico
 
*/

let n1 = 4;
let n2 = 2;

if ((n1 % 2 == 1 && n2 % 2 == 1) && (n1 > 0 && n2 > 0)) {
    console.log(n1,n2, "sao variaveis impares e positivas ao mesmo tempo");
} else if ((n1 % 2 == 0 && n2 % 2 == 0) && (n1 > 0 && n2 > 0)) {
    console.log(n1,n2, "sao variaveis pares e positivas ao mesmo tempo");    
}