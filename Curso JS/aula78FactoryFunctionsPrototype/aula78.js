const falar = {
falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando.`)
},
 };

const comer = {
    comer() {
    console.log(`${this.nome} ${this.sobrenome} está comendo.`)
}, 
};

const beber = {beber() {
    console.log(`${this.nome} ${this.sobrenome} está bebendo.`)
}
};
const pessoaPrototype = {...falar, ...comer, ...beber};


function criaPessoa(nome, sobrenome){
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Olavo', 'Soares');
const p2 = criaPessoa('Karina', 'Alves');
console.log(p2);
