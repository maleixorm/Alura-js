const cliente = {
    nome: "Joao",
    idade: 24,
    emai: "joao@firma.com",
    telefones: ["11955554444", "11944443000"]
};

cliente.enderecos = [
    {
        rua: "Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "Ap. 934"
    }
];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }