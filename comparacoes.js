// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log(numero == texto) // será true, esse tipo de comparação converte o texto 5 em número.

// comparação explicita

console.log(numero === texto) // será false, porque ele não faz a conversão automática e faz comparação do valor e tipo de dado

// typeof
console.log(typeof numero); // number
console.log(typeof texo); // string