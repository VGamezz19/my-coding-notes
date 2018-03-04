//Logica de la aplicacion

module.exports.toFahrenheit = (num)=> {
    return (num * 9/5) + 32;
}

module.exports.toCelsius = (num)=> {
    return (num -32) * 5/9;
}