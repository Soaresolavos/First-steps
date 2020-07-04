const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Teste 2',
    descricao: 'Segundo teste da base de dados'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente');
    res.render('index');
    next();
} 

exports.envioHome = (req, res) => {
    res.send(req.body);
    return;
}