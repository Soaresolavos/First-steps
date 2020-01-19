/* Operadores ternários 
Consiste de "?:" um lugar que precise de um IF e ELSE só
Primeiro vem a (condição) ? 'Valor para verdadeiro' : 'valor para falso'
*/
// const pontuacaoUsuario = 999;
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');    
// } else {
//     console.log('Usuário normal');
// }

const pontuacaoUsuario = 700;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'usuário normal';
console.log(nivelUsuario); 