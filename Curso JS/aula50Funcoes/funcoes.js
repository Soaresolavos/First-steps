/*A função definida com a palavra Function tem
uma variável especial que se chama Arguments que 
sustenta todos os argumentos enviados */

// function funcao (a, b, c) {
//    let total = 0;
//    for (let argumento of arguments) {
//        total += argumento;
//    }
//    console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);


// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade);
// }
// let obj = { nome: 'Olavo', sobrenome: 'Soares', idade: '35' };
// funcao(obj);

// function funcao([valor1, valor2, valor3] ) {
//     console.log(valor1, valor2, valor3);
// }

// funcao(['Olavo','Soares', 35]);

const conta = function (operador, acumulador, ...numeros) {
    for(let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);