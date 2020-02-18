// const pessoa = {
//   nome:'Olavo',
//   sobrenome: 'Conceição'  
// };
// const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);
// console.log(pessoa['sobrenome']);
//=======================================
// const pessoa1 = new Object();
// pessoa1.nome = 'Olavo';
// pessoa1.sobrenome = 'Soares';
// console.log(pessoa1);
//=======================================
// const pessoa1 = new Object();
// pessoa1.nome = 'Olavo';
// pessoa1.sobrenome = 'Soares';
// delete pessoa1.sobrenome;
// console.log(pessoa1);
//========================================
const pessoa1 = new Object();
pessoa1.nome = 'Olavo';
pessoa1.sobrenome = 'Soares';
pessoa1.idade = 27;
pessoa1.falarNome = function(){
    return (`Olá ${this.nome} ${this.sobrenome}!`)
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
