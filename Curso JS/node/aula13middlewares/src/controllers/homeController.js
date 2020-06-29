exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente');
    res.render('index');
    next();
} 

exports.envioHome = (req, res) => {
    res.send(req.body);
    return;
}