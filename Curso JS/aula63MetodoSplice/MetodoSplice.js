// nomes.splice(índice atual, delete, elem1, elem2, elem3);
//               -5      -4        -3         -2        -1        
//                0       1         2          3         4        
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(0, 0, 'Márcio');
 
console.log(nomes, removidos);

/*
pop => const removidos = nomes.splice(-1, 1);
shift => const removidos = nomes.splice(0, 1);
push => nomes.splice(nomes.length, 0, 'Márcio');
unshift => nomes.splice(0, 0, 'Márcio');
*/