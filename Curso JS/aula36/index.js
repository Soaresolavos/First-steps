//                 0          1         2       3
// const nome = ['Olavo', 'Maria', 'Carlos', 'José'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// console.log('==========================================');

// for (let i in nome) {
//     console.log(nome[i]);
// }

// console.log('==========================================');

// for (let valor of nome){
//     console.log(valor);
// }

// console.log('==========================================');

// nome.forEach(function(valor, indice, array){
//     console.log(valor, indice, array);
// })

const pessoa = {
    nome: 'Olavo',
    sobrenome: 'Soares'
};
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
//FOR Clássico - Geralmente com iteráveis(array, strings)
//FOR IN - Retorna o índice ou chave (array, strings ou objetos)
//FOR OF - Retorna o valor em si (iteráveis array ou strings)
