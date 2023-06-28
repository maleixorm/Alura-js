// parametros da função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(5, 7));

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}. Minha idade é ${idade}`;
}

console.log(nomeIdade(35, "Marcos"));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(2, 4)));