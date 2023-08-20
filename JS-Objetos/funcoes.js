const cliente = {
    nome: "Joao",
    idade: 24,
    emai: "joao@firma.com",
    telefones: ["11955554444", "11944443000"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
            console.log('Saldo Insulficiente!');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado! O novo saldo é: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);