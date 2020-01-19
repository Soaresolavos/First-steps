// Declaração clássica de função (Function hoisting)
falaOi();
function falaOi () {
    console.log('Oie');
}
//As funções são First-class objects (Objetos de primeira classe)
// Function expression
const souUmdado = function() {
    console.log('Sou um dado.');
};
souUmdado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};
funcaoArrow();

// Dentro de um objeto pode ter uma função

const obj = {
    falar: function () {        // Pode ser sem os dois pontos e a palavra 'Function'
        console.log('Estou falando!');
    }
}

obj.falar();