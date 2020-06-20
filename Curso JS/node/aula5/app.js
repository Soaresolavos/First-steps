const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'test.json');

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'Olavo'},
//     {nome: 'Carlos'},
//     {nome:'José'},
//     {nome: 'João'},    
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));
}

leArquivo(caminhoArquivo)

