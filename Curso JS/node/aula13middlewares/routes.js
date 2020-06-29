const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController')

function meuMiddleware(req, res, next){
    console.log();
    console.log('Passei pelo middleware');
    console.log();
    next();
}

function ultimoMiddleware(req, res, next){
    console.log();
    console.log('Passei no ultimo middleware');
    console.log();
    next();
}

//Rotas da Home
route.get('/', meuMiddleware, homeController.paginaInicial, ultimoMiddleware);
route.post('/', homeController.envioHome);

//Rotas de Contato
route.get('/contato', contatoController.contatoInicial);
route.post('/contato', contatoController.envioContato);

//Rotas de Sobre
route.get('/sobre', sobreController.sobreInicial);
route.post('/sobre', sobreController.envioSobre);


module.exports = route;