//"Funções construtoras" retornam objetos assim como as "Funções Fábrica"
//Funções construtoras usam letra maiuscula e a palavra 'NEW'
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luis', 'Otávio');
const p2 = new Pessoa('Olavo', 'Soares');

console.log(p1);
console.log(p2);
console.log(typeof(p1));