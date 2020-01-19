//return
// Retorna um valor
// Termina a função
// function soma (a, b){
//     return a + b;

// }
// console.log (soma(2, 7));

//Função que não retorna valor mas tem alguma utilidade
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'green';
// });

// function criaPessoa (nome, sobrenome) {
//     return {nome, sobrenome};
// }
// const p1 = criaPessoa('Olavo', 'Conceição');
// const p2 = {
//     nome: 'Olivar',
//     sobrenome:'Soares'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase (comeco) {
//     function falaResto (resto) {
//         return resto;
//     }

//     return falaResto;
// }

function criaMultiplicador (multiplicador) {
    return function (n) {
        return n * multiplicador;
    }; 
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
