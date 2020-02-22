function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode alterar ou não o valor
        configurable: true // reconfigurável

    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true 
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true,
            configurable: true 
        }
    });
}


// p1.estoque = 500000;
// console.log(p1);
const p1 = new Produto('Sandália', 40.00, 5);
for (let chave in p1) {
    console.log(chave)
};

console.log(p1);