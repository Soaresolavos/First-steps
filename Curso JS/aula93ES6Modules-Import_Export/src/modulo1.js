const nome = 'Olavo';
const sobrenome = 'Soares';
const idade = 35;

function soma(x, y) {
    return x + y;
}

export {nome, sobrenome as s1, idade, soma}; 

export const type = 'Camiseta'; 
export const color = 'Azul';
export const size = 'Médio';

export class Produto {
    constructor(tipo, cor, tamanho) {
        this.tipo = tipo;
        this.cor = cor;
        this.tamanho = tamanho;
    }
}