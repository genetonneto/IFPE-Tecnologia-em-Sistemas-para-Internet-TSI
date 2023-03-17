// Identificar se há exatamente (apenas) um número par entre três número dados;

let n1 = 1;
let n2 = 3;
let n3 = 4;

if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 0){
	console.log('todos os numeros sao pares');
} else if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 1){
	console.log('dois numeros sao pares');
} else if (n1 % 2 == 0 && n2 % 2 == 1 && n3 % 2 == 0){
	console.log('dois numeros sao pares');
} else if (n1 % 2 == 0 && n2 % 2 == 1 && n3 % 2 == 1){
	console.log('apenas um numero eh par');
} else if (n1 % 2 == 1 && n2 % 2 == 0 && n3 % 2 == 1){
	console.log('apenas um numero eh par');
} else if (n1 % 2 == 0 && n2 % 2 == 1 && n3 % 2 == 0){
	console.log('apenas dois numeros sao pares');
} else if (n1 % 2 == 1 && n2 % 2 == 1 && n3 % 2 == 0)
	console.log('apenas um numero eh par');