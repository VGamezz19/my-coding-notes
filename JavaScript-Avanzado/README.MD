# JavaScript-Avanzado

UNCLE BOB 

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

// Other Example
class Job {
  constructor(title) {
    this.title = title
  }

  getTitle() {
    return `Welcome to ${this.title}`
  }

  getHTMLTitle(){
    return `<h1>
    ${this.getTitle()}
    </h1>
    `
  }
}

const codurance = new Job('codurance')

codurance.getHtmlTitle();

```

crear otra factory function para gestionar el output de la suma de areas

### O - Open-close principle

> Objects or entities should be open for extension, but closed for modification.

- *Open for extension*

Crear y añadir nuevas funcionalidades/ extensiones en nuestro codigo **sin romper** el codigo existente.

- *Close for modification*

Cambios bruscos en la **funcionalidad existene**, porqie eso forzaria a refactorizar una gran cantidad de codigo

Si tengo que modificar el modulo, para añadir nuevas extensiones, el principio Open Clouse a fallado

Ejemplo

```js
let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
};
export default iceCreamMaker;
```

Para añadir nuevos elados, tendremos que modificar el array ya definido.
Pero tambien podemos añadir un metodo para añadir nuevos elados

```js
let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
  makeIceCream(flavor) {
    if (iceCreamFlavors.indexOf(flavor) > -1) {
      console.log('Great success. You now have ice cream.');
    } else {
      console.log('Epic fail. No ice cream for you.');
    }
  },
  addFlavor(flavor) {
    iceCreamFlavors.push(flavor);
  },
};
export default iceCreamMaker;
```

### L - Liskov substitution principle

Una subclase/ subtipo no ha de romper la funcionalidad de la clase padre/ de la clase que deriva.

Podemos sufrir confusiones a la hora de heredar algunos campos o extender algunas clases.

> If it Looks like a Duck, Quacks like a Duck, but needs Batteries - You probably have the wrong abstraction
> [Slack - LSP](https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle#answer-584732)

### I - Interface segregation principle

Lo que nos infica este principio, es que no hemos de crear o enlazar una interfaz con metodos que no usamos, o que nos obliga a añadir a la clase que esta heredando ese contrato/interfaz.
Por ejemplo:

```ts
interface shapeInterface {
  type : string,
  area(),
  volume()
}

class square extends shapeInterface {
  // ...
}

class cubo extends shapeInterface {
  // ...
}
```

Esta extension de interfaces esta mal, ya que el cuadrado no puede tener volumen y le obliga a implementar un metodo que no puede usar.
Esto significa que tendriamos que crear un nuevo contrato especifico para las figuras que no tengan volumen, y otras figuras con volumen. Por ejemplo:

```ts
interface shapeInterface {
  type:string,
  area()
}

interface solidShapeInterface extends shapeInterface { 
  type:string,
  volume()
}

class square extends shapeInterface {
  // ...
}

class cubo extends shapeInterface &
```

### D - Dependency inversion principle

