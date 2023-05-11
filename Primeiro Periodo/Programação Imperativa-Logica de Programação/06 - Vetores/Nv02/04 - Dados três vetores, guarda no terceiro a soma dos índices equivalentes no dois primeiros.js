// Implementar um subprograma que dados três vetores, guarda no terceiro a soma dos índices equivalentes no dois primeiros
// Exemplo: c[0] = a[0] + b[0] // e assim por diante;

function vetores(v1, v2, v3) {
    for (i = 0; i < v1.length; i++) {
        v3 = v1[i] + v2[i];
        console.log(v3);
    }
}

let v1 = [1, 2, 3, 4, 5];
let v2 = [6, 7, 8, 9, 10];
let v3 = [];
let resultado = vetores(v1,v2,v3);