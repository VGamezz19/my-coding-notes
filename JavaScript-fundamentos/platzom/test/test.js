const expect = require('chai').expect
const platzom = require('..').default
//Poniendo '..' va ir a la Raiz del proyecto, y por defecto buscara
//en el package.json. Efectivamente, nosotros en hemos definido
//que el archivo MAIN va a ser el de /dist/src/platzom.js
//asique ira a buscar ese.

describe('#platzom', function(){
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
        const translation = platzom("Programar")
        expect(translation).to.equal("Program")
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const translation = platzom("Zorro")
        const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})
