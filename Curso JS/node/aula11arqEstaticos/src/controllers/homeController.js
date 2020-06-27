exports.paginaInicial = (req, res) => {
    res.render('index');
} 

exports.envioHome = (req, res) => {
    res.send('Obrigado por se cadastrar!');
}