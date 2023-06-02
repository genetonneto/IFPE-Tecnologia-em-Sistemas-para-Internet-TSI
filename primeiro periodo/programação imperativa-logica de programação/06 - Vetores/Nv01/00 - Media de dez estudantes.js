// Computar a media de dez estudantes;

let notas = [5.3, 8, 7.4, 9, 6, 6.5, 7, 1, 2.5, 10];
let media = 0;

for (let i = 0; i < notas.length; i++) {
    media = media + notas[i];
}
media = media / notas.length;
console.log(media);