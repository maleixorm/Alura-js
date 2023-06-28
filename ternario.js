const idadeMinima = 18;
const idadeCliente = 19;

if (idadeCliente >= idadeMinima) {
    console.log("O cliente pode consumir bebida alcoólica!");
} else {
    console.log("A venda de bebida alcoólica é proibida para menores!")
}

console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");