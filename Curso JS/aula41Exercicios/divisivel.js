/* Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 ou 5 = FizzBuzz
Número NÃO é divisível por 3 ou 5 = Número
Checar se o número é realmente o número
Use a função com números de 0 a 100
*/
/*
Um número é divisível por 3 quando a soma dos valores absolutos
 dos seus algarismos for divisível por 3. 
 Exemplo: 234 é divisível por 3, pois a soma de seus algarismos é igual a 2+3+4=9, 
e como 9 é divisível por 3, então 234 é divisível por 3
*/

function fizzBuzz(n) {
    if (typeof n !== 'number') return NaN;
    if (n % 3 === 0 && n % 5 === 0) return 'Divisível por 3 e 5 (FizzBuzz)';
    if (n % 3 === 0) return 'Divisível por 3 (Fizz)';
    if (n % 5 === 0) return 'Divisível por 5 (Buzz)';
    return n;
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
