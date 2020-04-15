function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ` Passei na Promise`);
            return;
        }, tempo);
    });
}

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 10)),
    esperaAi('Promise 2', rand(1, 10)),
    esperaAi('Promise 3', rand(1, 10)),
    // 'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})