# JavaScript-Avanzado

## SOLID

- S - Single responsibility principle

- O - Open close principle

- L - Liskov substitution principle

- I - Interface segregation principle

- D - Dependency -Inversion principle

> Estas notas salen de la lectura del post [SOLID - simple](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa) y [SOLID - advanced](https://thefullstack.xyz/solid-javascript/)

### S - Single responsibility principle

A class/methods solo ha de tener una sola razon de cambio, e/y significado, solo ha de tener una tarea.

por ejemplo: tenemos un par de figuras y queremos calcular su area:

> Para entender las Factory function, se recomenda leer este post [Factory function vs constructor vs clasess](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)

```js

// Factory function

const circle = (radius) => {
    const proto = {
        type: 'Circle'
        // methods
    }

    return Object.assign(Object.create(prop), {radius})
}

const square = (radius) => {
    const proto = {
        type: 'Square'
        // methods
    }

    return Object.assign(Object.create(prop), {radius})
}

// Factory method

const areaCalculator = (shapes) => {
  const proto = {
    sum() {
      // logic to sum
    },
    output () {
     return `
       <h1>
         Sum of the areas of provided shapes:
         ${this.sum()} 
       </h1> `
    }
  }
  return Object.assign(Object.create(proto), { shapes })
}

// Usage

const shapes = [
  circle(2),
  square(5),
  square(6)
]
const areas = areaCalculator(shapes)
console.log(areas.output())
```

Cual es el mayor problema del codigo que hemos escrito?
Como podemos ver, la funciona `output` posee la responsabilidad de mostrar los datos en formato HTML. El nombre no cuadra, porque entonces tendriamos que llamarlo `outputHtml`. Que pasa si el usuario quiere mostar el mensaje en otro formato? Claramente tenemos un problema de Single responsibility principle

`areaCalculator` solo tendria que sumar las areas y devolvernos ese area sumada

solucion?

```js
const shapes = [
  circle(2),
  square(5),
  square(6)
]
const areas  = areaCalculator(shapes)
const output = sumCalculatorOputter(areas)
console.log(output.JSON())
console.log(output.HAML())
console.log(output.HTML())
console.log(output.JADE())
```

crear otra factory function para gestionar el output de la suma de areas

### O - Open-close principle

> Objects or entities should be open for extension, but closed for modification.

- *Open for extension*

Crear y añadir nuevas funcionalidades/ extensiones en nuestro codigo **sin romper** el codigo existente.

- *Close for modification*

Cambios bruscos en la **funcionalidad existene**, porqie eso forzaria a refactorizar una gran cantidad de codigo