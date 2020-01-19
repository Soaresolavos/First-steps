/*
&& -> false && true -> false "O valor mesmo" (ou se for true o último valor)
|| ->  true || false -> vai retornar o valor verdadeiro
FALSY VALUES
0
'' "" `` (string vazia)
null/ undefined
Nan
*/

// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = 'João';
// console.log(vaiExecutar && falaOi());
//=============================================================
// console.log(0 || false || null|| 'Olavo Soares' || true);

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'red';
// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // Uma string será retornada
const d = false;
const e = NaN;
console.log(a || b || c || d || e); 
// caso todas sejam falsas será retornada o último valor