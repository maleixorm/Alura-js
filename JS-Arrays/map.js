const notas = [10, 9.5, 8, 7, 6];

notas.forEach( (nota) => {
    nota += 1;
    console.log(nota);
});

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notasAtualizadas);