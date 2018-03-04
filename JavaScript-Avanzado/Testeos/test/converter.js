var expect = require('chai').expect;
var converter = require('..')
//AL poner ".." estamos requiriendo el MAIN de este modulo

describe('Temperature Conversor', () => {

    describe('Celsius to Fahrenheit Conversion', ()=> {

        it('Converts 100C to Fahrenheit', ()=> {
           let fh =  converter.toFahrenheit(100);
           expect(fh).to.equal(212)
        }) //la funcion en si que vamos a testear
    })

    describe('Fahrenheit to Celsius Conversion', ()=> {

        it('Converts 212F to Celcius', ()=> {
           let fh =  converter.toCelsius(212);
           expect(fh).to.equal(100)
        }) //la funcion en si que vamos a testear
    })

})