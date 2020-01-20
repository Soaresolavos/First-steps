//IIFE => immediately invoked function expression
// Cria a função dentro '()' e já chama ela através dos '()'
(function(idade, peso, altura) {
    const sobrenome = 'Soares';
    function criaNome(nome) {
        return nome + ' '+ sobrenome;
    }

    function falaNome (){
        console.log(criaNome('Olavo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(35, 90, 1.91);

