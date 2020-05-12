/* 
É possível importar/exportar mudando a variável com a palavra 'as'
importar 'como' ou exportar 'como'
É possível importar todo o módulo com "import * as 'nomeNovo' from './nomeArquivo'. Apenas o que estiver selecionado para exportação."
exportar uma variavel default irá ser exportado sempre o seu conteúdo independentemente do nome utilizado na importação.
Só pode exportar um padrão por arquivo; não precisa usar dentro das chaves {};
*/

import { nome as n1, s1, idade, soma, Produto, type, color, size } from './modulo1';
console.log(n1, s1);
console.log(idade);
console.log(soma(3, 7));



const p1 = new Produto('Boné', 'Azul', 'Grande');
console.log(p1);

const p2 = new Produto(type, color, size);
console.log(p2);