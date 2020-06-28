exports.sobreInicial = (req, res) => {
    res.send(
        '<form action="sobre" method="POST">  Solicite Informações: <input type="text" name="cliente"><button>enviar</button><form/>'
    );
} 

exports.envioSobre = (req, res) => {
    res.send('Informações solicitadas com sucesso!');
}