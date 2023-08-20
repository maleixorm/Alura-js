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

cliente.enderecos.push(
    {
        rua: "Joseph Ladder",
        numero: 404,
        apartamento: false,
        complemento: "Casa"
    }
);

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log(listaApenasApartamentos);