// Converter o dia da semana (string) em um valor numérico (“domingo” -> 0, “segunda” -> 1, etc.);

let dia = "domingo";

if (dia == "segunda") {
    console.log(dia + " = " + 2);
} else if (dia == "terça") {
    console.log(dia + " = " + 3);
} else if (dia == "quarta") {
    console.log(dia + " = " + 4);
} else if (dia == "quinta") {
    console.log(dia + " = " + 5)
} else if (dia == "sexta") {
    console.log(dia + " = " + 6)
} else if (dia == "sabado") {
    console.log(dia + " = " + 7)
} else {
    console.log(dia + " = " + 0)
}