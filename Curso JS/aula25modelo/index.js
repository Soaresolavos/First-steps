
// IF: Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// ELSE: Senão faça isso {código}

const numero = 7;

if (numero <= 10){
    console.log('The number is less or equal to 10');    
}

if (numero >= 10) {
    console.log('The number i greater than or equal to 10.');
}

if (numero >= 0 && numero <= 5){
    console.log('The number is between 0 and 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('The number is between 6 and 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('The number is between 9 and 11.');
} else {
    console.log('The number is NOT between 0 and 11.');
}

console.log('Here comes the rest of the code.')