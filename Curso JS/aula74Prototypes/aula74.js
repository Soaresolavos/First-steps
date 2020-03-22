
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;    
    
}

Pessoa.prototype.nomeCompleto = function() {
return this.nome +' '+ this.sobrenome};

const pessoa1 = new Pessoa('Olavo', 'Soares');
const pessoa2 = new Pessoa('Karina', 'Alves');
const pessoa3 = new Pessoa('Aline', 'Soares');

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa3); 
