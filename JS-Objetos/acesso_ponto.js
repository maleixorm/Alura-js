const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente.nome}. Essa pessoa tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são: ${cliente.cpf.substring(0, 3)}`);