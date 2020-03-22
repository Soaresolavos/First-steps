function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

        let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // reconfigurável
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number') {
                console.log('Você deve digitar um número no valor do estoque.');
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Sandália', 40.00, 5);
p1.estoque = 22;
console.log(p1.estoque);
console.log(p1);
 