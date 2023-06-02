// Identificar quando exatamente uma entre duas variáveis booleanas é verdadeira (conhecido como ou exclusivo);

/*
Operador E ==> &&
false && false = false
false && true = false
true && false = false
true && true = true


Operador OU ==> ||
false || false = false
false || true = true
true || false = true
true || true = true


b1 = true   &&  b2 = !true  (entao b1 é verdade e b2 é falso)
b1 = false  &&  b2 = !false (entao b1 é falso e b2 é verdadeiro)
b1 = !true  &&  b2 = !true  (entao b1 é falso e b2 falso)
b1 = !false &&  b2 = !false (entao b1 é verdadeiro e b2 é verdadeiro)

*/

let b1 = true;
let b2 = true;

if (b1 == true && b2 != true) {
    console.log("b1 e igual a : " ,b1, " e b2 e :" ,b2);
} else if (b1 == false && b2 != false) {
    console.log("b1 e igual a : " ,b1, " e b2 e :" ,b2);
} else if (b1 != true && b2 != true) {
    console.log("b1 e igual a : " ,b1, " e b2 e :" ,b2);
} else if (b1 != false && b2 != false){
    console.log("b1 e igual a : " ,b1, " e b2 e :" ,b2);
}