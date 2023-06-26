// tipo de dado
// booleanos

// conversão implícita

const numero = 456;
const numeroString = "456";
const numeroString2 = Number("456a");

console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);

// conversão explícita

// Number()
// String()

console.log(numero + Number(numeroString));
console.log(numero + Number(numeroString2));
