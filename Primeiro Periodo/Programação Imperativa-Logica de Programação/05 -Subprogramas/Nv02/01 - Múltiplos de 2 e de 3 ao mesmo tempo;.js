// Receber três números como parâmetros e imprimir aqueles que são múltiplos de 2 e de 3 ao mesmo tempo;

function multiplos(n1, n2, n3) {
   if ((n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 0) && (n1 % 3 == 0 && n2 % 3 == 0 && n3 % 3 == 0)){
      console.log(n1, n2, n3, 'são multiplos por 2 e por 3');
   } else if ((n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 != 0) && (n1 % 3 == 0 && n2 % 3 == 0 && n3 % 3 != 0)) {
      console.log('apenas', n1,n2, 'sao multiplos por 2 e 3');
   } else if ((n1 % 2 == 0 && n2 % 2 != 0 && n3 % 2 == 0) && (n1 % 3 == 0 && n2 % 3 != 0 && n3 % 3 == 0)) {
      console.log('apenas', n1, n3, 'sao multiplos por 2 e 3');
   } else {
      console.log('apenas', n2,n3, 'sao multiplos por 2 e por 3')
   }
}
var resultado = multiplos(2,4,6);
console.log(resultado);