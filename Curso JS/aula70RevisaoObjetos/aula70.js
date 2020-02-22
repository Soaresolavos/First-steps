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
// const pessoa1 = new Object();
// pessoa1.nome = 'Olavo';
// pessoa1.sobrenome = 'Soares';
// pessoa1.idade = 27;
// pessoa1.falarNome = function(){
//     return (`Olá ${this.nome} ${this.sobrenome}!`)
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }
//=============================================
// function criaPessoa(nome, sobrenome) {     //Factory function
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// };

// const p1 = criaPessoa('Olavo','Conceição');
// console.log(p1.nomeCompleto);
//=============================================
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

const p1 = new Pessoa('Olavo', 'Soares');
const p2 = new Pessoa('Carlos', 'José');
const p3 = new Pessoa('Roberto', 'Silva');
const p4 = new Pessoa('Eduardo', 'Maia');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);