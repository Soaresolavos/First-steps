const pessoa = {
    nome: 'Olavo',
    sobrenome: 'Soares',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);