exports.paginaInicial = (req, res) => {
    res.send(
        '<form action="/" method="POST">  Nome: <input type="text" name="cliente"><button>Cadastrar</button><form/>'
    );
} 

exports.envioHome = (req, res) => {
    res.send('Obrigado por se cadastrar!');
}