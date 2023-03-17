// Identificar se há exatamente (apenas) um número ímpar entre três números dados.

let n1 = 2
let n2 = 6
let n3 = 9


if (n1 % 2 == 1 && n2 % 2 == 1 && n3 % 2 == 1){
	console.log('todos os numeros sao impares')
} else if (n1 % 2 == 1 && n2 % 2 == 1 && n3 % 2 == 0){
	console.log('dois numeros sao impares')
} else if (n1 % 2 == 1 && n2 % 2 == 0 && n3 % 2 == 1){
	console.log('dois numeros sao impares')
} else if (n1 % 2 == 1 && n2 % 2 == 0 && n3 % 2 == 0){
	console.log('apenas um numero eh impar')
} else if (n1 % 2 == 0 && n2 % 2 == 1 && n3 % 2 == 0){
	console.log('apenas um numero eh impar')
} else if (n1 % 2 == 1 && n2 % 2 == 0 && n3 % 2 == 1){
	console.log('apenas dois numeros sao impares')
} else if (n1 % 2 == 0 && n2 % 2 == 0 && n3 % 2 == 1)
	console.log('apenas um numero eh impar')