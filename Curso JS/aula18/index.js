// const pessoa1 = {
//     nome: 'Olavo',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);
//========================================================
// function criaPessoa (nome, sobrenome, idade){  //Parâmetro
//     return { nome, sobrenome, idade}; 

/*
nome: nome
sobrenome: sobrenome
idade: idade
Quando tem valores iguais pode simplificar
*/
// const pessoa1 = criaPessoa('Olavo', 'Soares', 35);
// const pessoa2 = criaPessoa('Valquíria', 'Soares', 36);
// const pessoa3 = criaPessoa('Renne', 'Soares', 34);
// const pessoa4 = criaPessoa('Robson', 'Soares', 38);
// const pessoa5 = criaPessoa('Júnior', 'Soares', 40);

// console.log(pessoa2.idade, pessoa4.nome, pessoa5.nome); //Argumento
//==========================================================
const pessoa1 = {
    nome: 'Olavo',
    sobrenome: 'Conceição',
    idade: 25,

    // fala() {
    //     console.log(`${this.nome} ${this.sobrenome} está falando "Oi!".`);   
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
        
    },
    incrmentaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();


