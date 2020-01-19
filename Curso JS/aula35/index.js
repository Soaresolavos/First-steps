// For in lê os indices ou chaves do objeto
//                 0       1      2
// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Olavo',
    sobrenome: 'Soares',
    idade: 35
};

for (let chave in pessoa) {
    console.log(chave,`:`, pessoa[chave]);
}