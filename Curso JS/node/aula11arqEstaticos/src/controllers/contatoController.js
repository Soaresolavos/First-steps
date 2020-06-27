exports.contatoInicial = (req, res) => {
    res.send(
        '<form action="contato" method="POST">  Envie uma mensagem: <input type="text" name="cliente"><button>Enviar</button><form/>'
    );
} 

exports.envioContato = (req, res) => {
    res.send('Mensagem enviada com sucesso. Obrigado pelo seu contato!');
}