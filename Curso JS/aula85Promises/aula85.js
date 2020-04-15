function rand(min, max) {
   min *= 1000;
   max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(msg);
        }, tempo);
    });   
}

esperaAi('Conexão com o banco de dados', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados e exibindo na tela', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
})

