//Tipos de dados primitivos
//String, number, undefined, null, boolean, symbol
const nome = 'Olavo';//Strings
const nome1 = "Olavo";//Strings
const nome2 = `Olavo`;//Strings
const num1 = 10; //Number
const num2 = 10.52; // Number
let nomeAluno; //undefined => não aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo => não aponta para local nenhum na memória
//const boolean = true;
//const boolean = false;// boolean = true, false (lógico)

console.log(typeof nome, nome);

let a = 2;
const b = a;
console.log(a, b); //2, 2
a = 3;
console.log(a, b);