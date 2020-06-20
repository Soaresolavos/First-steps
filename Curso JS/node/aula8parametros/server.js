const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);






app.get('/', function (req, res) {
    res.send(
        '<form action="/" method="POST">  Nome: <input type="text" name="cliente"><button>Enviar formulário</button><form/>'
    );
});

app.get('/testes/:idUsuarios?/:senha', function (req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('Oi');
});

app.post('/', function (req, res) {
    console.log(req.body);
    res.send(`Obrigado ${req.body.cliente} por se cadastrar!`);
})


app.listen(3000, function () {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor sendo executado na porta 3000!');
});