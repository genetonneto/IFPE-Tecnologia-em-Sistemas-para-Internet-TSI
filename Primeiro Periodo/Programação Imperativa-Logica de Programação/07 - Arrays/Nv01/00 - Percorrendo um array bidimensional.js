// Percorrendo um array bidimenssional;

let notas = [
    [2, 3, 4, 45, 5, 6, 6],
    [2, 10, 8, 9, 5, 5, 3]
];

for (i = 0; i < notas.length; i++) {
    for (j = 0; j < notas[i].length; j++) {
        process.stdout.write(`${notas[i][j]}\t`);
    }
    console.log();
}   