// Exercício do Slide: Vetores

var notas = [5.6, 6.2, 7.8, 3.8, 1.0, 10.0, 5.5, 6.5, 8.9, 3.1]
var media = 0

for (var contador = 0; contador < notas.length; contador++){
	media = media + notas[contador]
}

media = media/notas.length
console.log(media)