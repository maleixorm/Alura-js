const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com"
};

console.log(`O nome do cliente é ${cliente["nome"]}. Essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "endereco"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`);
});