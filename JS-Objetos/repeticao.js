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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};