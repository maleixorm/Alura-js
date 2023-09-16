let x = "";
console.log(x);
x = "oi";

function imprimeTexto(texto) {
    console.log(texto);
}

// executando a função

imprimeTexto("Oi.");
imprimeTexto("Outro texto.");

// 3 formas de escrever funções

function soma() {
    return 2 + 2;
}

// console.log(soma());

imprimeTexto(soma());