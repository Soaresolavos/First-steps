
//Não podemos criar constantes com palavras reservadas (let, if, console, etc).
// constantes precisam ter nomes significativos;
//Não pode começar o nome de uma constantes com um número;
//Iniciar com letras minúsculas;
//Não podem conter espaços ou traços;
// Utilizamos camelCase (palavras compostas)
//As constantes são case-sensitive (maiusculas e minusculas são diferentes);
//Não podemos modificar o valor de uma constante;
//Não utilize VAR utilize CONST!

const nome = 'João';

console.log(nome);

const primeiroNumero = '5';
const segundoNumero = 10; //Operadores matemáticos básicos: +, -, *, /;
const resultado = primeiroNumero * segundoNumero;
const resultadoduplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + segundoNumero;
console.log(resultadoTriplicado);
//Entre aspas: String = Text |Sem aspas: Number = Número ou outro Tipo
// Para descobrir o Tipo da variável/constante utilizar "typeof";
console.log(typeof primeiroNumero);
console.log(typeof (primeiroNumero + segundoNumero));
