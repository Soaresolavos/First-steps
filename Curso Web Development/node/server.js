const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Página inicial');
});

app.get('/contato', function(req, res){
    res.send('Facebook, Instagram, Whatsapp');
});

app.get('/sobre', function(req, res){
    res.send('Nome: Olavo Soares, Idade: 35 anos');
});

app.listen(3000, function(){
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});