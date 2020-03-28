class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
console.log(`${this.nome} ${this.sobrenome} está falando`);
     }

    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo`);
     }

    beber() { 
        console.log(`${this.nome} ${this.sobrenome} está bebendo`);
    }
}

const p1 = new Pessoa("Olavo", "Soares");
const p2 = new Pessoa('Maria', 'Secundino');


