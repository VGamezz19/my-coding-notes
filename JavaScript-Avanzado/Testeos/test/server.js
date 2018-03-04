var expect = require('chai').expect;
var axios = require('axios');
//AL poner ".." estamos requiriendo el MAIN de este modulo

describe('Temperature Conversor API', () => {

    describe('Celsius to Fahrenheit conversion', ()=> {

        it('returns status 200', (done)=> {
            axios
                .get('http://localhost:3000/toFarenheit?temperature=100')
                .then((res)=> {
                    expect(res.status).to.equal(200)
                    done()
                })
        })

        it('returns 100C in fahrenheit', (done)=> {
            axios
                .get('http://localhost:3000/toFarenheit?temperature=100')
                .then((res)=> {
                    console.log("data --> ",res);
                    expect(res.data).to.equal(212)
                    done()
                })
        }) //la funcion en si que vamos a testear
    })

    describe('Fahrenheit to Celsius conversion', ()=> {
    
        it('returns status 200', (done)=> {
            axios
                .get('http://localhost:3000/toCelsius?temperature=212')
                .then((res)=> {
                    expect(res.status).to.equal(200)
                    done()
                })
        })
        it('returns 212F in toCelsius', (done)=> {
            axios
                .get('http://localhost:3000/toCelsius?temperature=212')
                .then((res)=> {
                    expect(res.data).to.equal(100)
                    done()
                })
        }) //la funcion en si que vamos a testear
    })

})