const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');
const sobreController = require('./src/controllers/sobreController')

//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.envioHome);

//Rotas de Contato
route.get('/contato', contatoController.contatoInicial);
route.post('/contato', contatoController.envioContato);

//Rotas de Sobre
route.get('/sobre', sobreController.sobreInicial);
route.post('/sobre', sobreController.envioSobre);


module.exports = route;