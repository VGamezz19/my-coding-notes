# Node.js

## ¿Que es NodeJS?

Ambiente de ejecución de código (Utilitario de un sistema operativo que ejecuta Javascript linea a linea)
Proyecto comunitario (Es un proyecto mantenido por una gran comunidad)
Cambio de paradigma (Distinta forma de utilizar Javascript)

## Antecedentes

1995 a 2009 : Javascript en cliente
2009 : Origen de Node JS (Ryan Dahl)

## Características

Libre (Open Source)
Realtime (Nativamente)
Orientado a eventos
Asíncrono
Multi-plataforma
Server-Side (Su función principal)
Robusto
Escalable
Expandible (Posibilidad de agregar módulos o plugins)
No bloqueante

## Comunidad

NodeJS Fundation (Comunidad que le da respaldo,mantenimiento y soporte)

Próximas actualizaciones
Soporte para HTTP/2
Mejor manejo de módulos

## Arquitectura

NodeJs trabaja con el motros de google chrome V8. En el año 2009 era el mejor y el más rapido. Esta escrito en C++.

[Imgur](https://i.imgur.com/dDPqkSx.png)

- Primera: nodejs
- Segunda: Es una capa estandar que usa nodeJS para poder comunicar el codigo que hemos escrito a la capa de "bindings"
- Tercera: bindings, son enlaces entre el codigo de JS y los modulos que estan en mas bajo nivel (con C++)
- cuarto/quito: La capa más baja de node. Todo el engine.

## Sistema

[Imgur](https://i.imgur.com/5wZALl9.png)

Libuv es una de las librerias de C++ encargado de efectuar el famoso Event loop.
Como vemos en la image, el motor V8 sera el encargado de ir administrando el codigo que hemos escrito en la plataforma de Node a los bindings estandarizados de node. estos bindings lo "compilara" (por decirlo de una manera, porque realmente JS no se compila, se transforma) a comportamiento de C++.

## Event loop

[Imgur](https://i.imgur.com/XcohGQk.png)

- Timers: Toda la familia de timers, setTimeout, etc.
- panding callbacks: Algun callback que tengamos pendiente
- Idle, prepare: Interno de node
- *poll*: Este sera el que comunique con otras librerias de C++ para poder hacer llamdas http, y otras peticiones.
- check: todo correcto?
- close callbacks: cerrar eventos.  

## Casos de uso

Dependiendo de su implementacion, podemos usarlo en *NRTA(Non-Real Time Applications)* o *RTA(Real Time Applications)*

### No Real Time

El mas comun entre cliente y servidor, peticion y respuestam, un canal *Unidireccional*.

### Real Time

Crearemos un canal de comunicacion entre ambas partes, y las dos estaran conectadas y comunicadas *Bidireccionalmente* (Canal persistente)

## [Conocimientos basicos y necesarios (Haz Click) 👈🏻 ](https://github.com/VGamezz19/platzi-course-notes/blob/master/NodeJs/NodeBasico/)