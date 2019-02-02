# [← |](https://github.com/VGamezz19/platzi-course-notes/tree/master/NodeJs) Debugger

podemos debuggear nuestro codigo js ejecutando node con `node inspect <nombre fichero>`.

Si añadimos un `debugger`, el inspect se parara en el

podremos navegar por el codigo con los comandos:

- cont, c - Continue execution
- next, n - Step next
- step, s - Step in
- out, o - Step out
- pause - Pause running code (like pause button in Developer Tools)

si le damos al `enter` ejecutara el ultimo commando que hemos ensertado,

> more detail

Inspeccionar archivo con debugger (consola)

- node inspect fileName.js

Ejecutar la siguiente línea de código

- next

Continua la ejecucion hasta el final

- cont

Observar variables en el código

- watch(variableName)

Reiniciar el codigo

- restart