# [← |](https://github.com/VGamezz19/platzi-course-notes) About Test

Tenemos 4 grandes bloques de test:

- **QA**. Que la aplicacion no se rompa (la funcionalidad)
- **E2E**. Test de la UI ([User Interface](https://algo3.uqbar-project.org/temario/01-intro-UI/intro-UI-definiciones-iniciales)) automatizados
- **Aceptación**. Requerimientos de la aplicacion
- **Unitarios**. La logica de la aplicacion

### Hint (Tanto en Fron como en Back)

> Un `controller` no ha de tener logica, se ha de mover al servicio

> Un `servicio` no ha de tener logica de datos, se ha de mover al modelo

> Un `componentes` puede tener logica *vm* aparte de la de controller.

Antes de ponernos a testear, es importante tener en cuenta los siguientes factores:

- Las capas de mi codigo estan bien separadas
- Realmente me proporciona valor escribir ese test

## Unitario

Los `test unitarios` se pueden devidir en dos gran grupos. Los `dummy test` y los `double test`

- dummy test, son aquellos que no hace falta ninguna dependencia para hacerlos funcionar
- doubles test, son lo que dependen de un segundo modulo, y has de recrearlo.

### Test Double

> [Double Test](http://xunitpatterns.com/Test%20Double.html) Read this to know more

Existen diversos tipos de recreaciones: *moks*, *spy*, *stub*, *fake*.

Todos son moks  una clase o funcion que te proteje de la funcion real, te la reproduce.
    - spy  te aseguras que has llamado un metodo.
    - stub  recuperar la informacion de la llamada de un metodo
    - fake  imitacion del objeto real

## Test de Integracion

Todos los componentes juntos funcionando.
    
## E2E

// Todo

## Test de aceptacion

// Todo
