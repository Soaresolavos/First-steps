/* Olavo Soares da Conceição tem 35 anos, pesa 94 kg 
tem 1.9 de altura e seu IMC é de 25.925925925925924
Olavo nasceu em 1984
*/
const nome = 'Olavo Soares';
const sobrenome = ' da Conceição';
const idade = 35;
const peso = 94;
const altura = 1.9;
//IMC = peso/ (altura*altura)
let anoNascimento = 2019 - idade;

const nomeCompleto = nome + sobrenome;
let imc = peso/(altura*altura);

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso}Kg`);
console.log(`Tem ${altura} de altura e seu IMC é de:${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);