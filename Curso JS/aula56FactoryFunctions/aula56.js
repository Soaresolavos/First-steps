//Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,

        sobrenome,

        //Getter

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter

        set nomeCompleto(valor) {
            valor = valor.split(' ');
           this.nome = valor.shift();
           this.sobrenome = valor.join(' ');
          
        },

        fala: function (assunto) {
            return `${this.peso} está ${assunto}`;
        },
        altura: a,

        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Olavo', 'Conceição', 1.91, 95);
p1.nomeCompleto = 'Olavo Soares da Conceição';

console.log(p1.nomeCompleto);