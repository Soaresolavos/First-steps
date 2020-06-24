const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;
    res.send(`<h1>A soma dos dois numeros é: ${result}</h1>`)

});

app.get("/imc", function (req, res) {
    res.sendFile(__dirname + '/imcCalculator.html');
});

app.post("/imc", function (req, res) {
    const weight = parseFloat(req.body.peso);
    const height = parseFloat(req.body.altura);
    const bmi = weight / (height * height);
    if (bmi > 40) {
        res.send(`Obesidade grau III`);
    } else if (bmi > 35 && bmi <= 40) {
        res.send(`Obesidade grau II`);
    } else if (bmi > 30 && bmi <= 35) {
        res.send(`Obesidade grau I`);
    } else if (bmi > 25 && bmi <= 30) {
        res.send(`Sobrepeso`);
    } else if (bmi > 18 && bmi <= 25) {
        res.send(`Peso normal`);
    } else if (bmi <= 18) {
        res.send(`Abaixo do peso`);
    }

});

app.listen(3000, function () {
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000.');
});