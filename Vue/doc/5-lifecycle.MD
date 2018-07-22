# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/Vue) LifeCycle

![img](https://github.com/VGamezz19/platzi-course-notes/blob/master/Vue/doc/lifecycle.png)


- **beforeCreate**: se ejecuta justo después de la inicialización de la instancia.

- **created**: se ejecuta cuando la instancia y los eventos, las computed properties, el data y los métodos están creados. 
 Normalmente se utiliza para inicializar propiedades del objeto data con consultas HTTP Get.

- **beforeMount**: se ejecuta justo antes de que se añada al DOM.

- **mounted**: se ejecuta después de añadirlo al DOM. Se puede utilizar para inicializar librerías que dependan del DOM.

- **beforeUpdate**: se ejecuta cuando el data cambia, pero el DOM aun no ha plasmado los cambios.

- **updated**: se ejecuta después de que el data cambie y el DOM muestre estos cambios.

- **beforeDestroy**: se ejecuta justo antes de eliminar la instancia.

- **destroyed**: se ejecuta cuando la instancia, los eventos, directivas e hijos del componente se han eliminado.
