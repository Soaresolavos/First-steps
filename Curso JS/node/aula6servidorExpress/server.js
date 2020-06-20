const express = require('express');
const app = express();




app.get('/', function(req, res){
    res.send(        
        '<form action="/" method="POST">  Nome: <input type="text" name="nome"><button>Enviar</button><form/>'
    );
});

app.post('/', function(req, res) {
    res.send('Obrigado por se cadastrar!');
})

app.get('/contato', function(req, res) {
    res.send('Whatssapp, Facebook, Formulário, instagram');
});

app.listen(3000, function() {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor sendo executado na porta 3000!')
});