var express = require('express')
var converter = require('..');

var app = express();

app.get('/toCelsius', (req, res)=> {
    var temperature = req.query.temperature
    console.log(temperature)
                      //Obtendremos los parametros que nos pasan por la URL, despues de el signo ?
    res.send(200, converter.toCelsius(temperature))
})

app.get('/toFarenheit', (req, res)=> {
    var temperature = req.query.temperature
                      //Obtendremos los parametros que nos pasan por la URL, despues de el signo ?
    res.send(200, converter.toFahrenheit(temperature))
})


app.listen(3000)