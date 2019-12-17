/*
Tipos de Dados Primitivos (valores imutáveis) - String, Number, Boolean, Undefined,
null (bigint, symbol).
**Os valores que são primitivos eles são copiados 
quando passam o valor deles para outra variável

Tipos de Dados por Referência (mútável) - Array, object, function
**Os valores por referência eles são passados para outra variável. 
Apontam para o mesmo local na memória do computador
*/
// let a = [1, 2, 3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// let a = 'A';
// let b = a;  // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

const a = {
    nome:'Olavo',
    sobrenome:'Soares'
};
const b = a;

a.nome = 'Carlos';g
console.log(b);