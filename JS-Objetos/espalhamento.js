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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`);
    console.log(`Ligando para ${telefoneResidencial}.`);
}

ligaParaCliente(...cliente.telefones);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda);