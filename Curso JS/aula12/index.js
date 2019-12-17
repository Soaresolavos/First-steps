let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
/*
const varD = varB;
const varE = varC;
const varF = varA;
*/

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);