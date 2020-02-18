const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0);













// const pessoas = [
//     { nome: 'Olavo', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 19 },
//     { nome: 'Rosana', idade: 32 },
//     { nome: 'Wallace', idade: 47 },
// ];