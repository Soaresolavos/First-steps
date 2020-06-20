// const multiplicacao = require('./mod');

// console.log(multiplicacao(2, 4));
// ================================================
const car = require('./mod');

const carro1 = new car('Opala');
const carro2 = new car ('Fusca');
carro1.andar();
carro2.andar();

/*
 Para navegar para frente usa-se "./"
 Para navegar para trás usa-se "../"
*/

console.log(__filename);
console.log(__dirname);
