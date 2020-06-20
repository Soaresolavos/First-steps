// module.exports = function(x, y) {
//     return x * y;
// };

// =================================================

module.exports = class Carro {
    constructor(modelo) {
        this.modelo = modelo;
    }

    andar() {
        console.log(`O carro ${this.modelo} está andando.`)
    }
}