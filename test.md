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

Existen diversos conceptos de test unitarios: *dummy*, *moks*, *spy*, *stub*, *fake*, etc.

> [Double Test](http://techdencias.net/2014/12/29/double-tests-dummies-mocks-spies-fakes-y-stubs-en-javascript/) Interesante articulo
<!-- Realmente todos los test unitarios, se podrian englovar en `moks`: *Una clase o funcion que te proteje de la funcion real y es capaz de reproducirla*

Todos son moks  una clase o funcion que te proteje de la funcion real, te la reproduce.
    - spy  te aseguras que has llamado un metodo.
    - stub  recuperar la informacion de la llamada de un metodo
    - fake  imitacion del objeto real -->
