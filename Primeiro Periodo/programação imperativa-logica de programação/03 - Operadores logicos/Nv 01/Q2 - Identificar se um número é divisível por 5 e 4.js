// Identificar se um número é divisível por 5 e 4;

let numero = 15;

if (numero % 5 == 0 && numero % 4 == 0) {
	console.log(numero + " e divisivel por 5 e por 4");
} else if (numero % 5 != 0 && numero % 4 == 0) {
	console.log(numero + " nao e divisivel por 5 mas sim por 4");
} else {
	console.log(numero + " divisivel por 5 mas nao por 4");
}