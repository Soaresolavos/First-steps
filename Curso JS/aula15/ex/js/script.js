const numero = Number(prompt('Digite um número:'));  
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero**(1/2)}<p/>`;
texto.innerHTML += `<p>${numero} É inteiro: ${Number.isInteger(numero)}<p/>`;
texto.innerHTML += `<p>${numero} É NaN: ${Number.isNaN(numero)}<p/>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}<p/>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;


//let num2 = Math.floor(num1); Arredonda para baixo
//let num2 = Math.ceil(num1); Arredonda para cima

