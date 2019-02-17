# Docker

Problemas al **Construir**:

- Dependencias de desarrollo
- Versiones de entornos de ejecución
- Equivalencia de entornos de desarrollo
- Equivalencia de entornos de producción
- Versiones / compatibilidad

Problemas al **Distribuir**:

- Generaciones del build diferentes
- Acceso a servidores de producción
- Ejecución nativa vs la distribuida
- Serverless

Problemas al **Ejecutar**:

- Dependencias de aplicación
- Compatibilidad de sistema operativo
- Disponibilidad de servicios externos
- Recursos de hardware

*Docker permite*:
**Construir, distribuir y correr tu código en cualquier lado**

## Qué es Docker

Docker Permite resolver problemas de construir, distribuir y ejecutar software en diferentes plataformas.

**Containarization**: un estándar para llevar algo dentro. Agrupadores de procesos.

- Versátiles:
  - En el orden de los MB
  - Tienen todas las dependencias que necesitan para funcionar correctamente.
  - Funcionan igual en todos lados.

- Eficientes:
  - Comparten archivos simultáneos con otros contenedores.
  - Solo se ejecutan procesos, no un SS.OO completo.

- Aislados:
  - Lo que pasa en el container queda en el container.
  - No pueden alterar su entorno de ejecución (a menos que explícitamente se indique lo contrario)

**Virtualization**: es una imagen o archivo que contiene información dentro. Por lo general son pesadas de administración costosa y son lentas.

- Pesadas:
  - En el orden de los GB
  - Muchas VMs en el mismo host suelen repetirse en lo que contienen

- Administración costosa:
  - Una VM tiene que ser administrada como cualquier otra computadora: patching, update, etc
  - Hay que administrar la seguridad interna entre apps

- Lentas:
  - Correr nuestro código en una VM implica no solo arrancar aplicaciones, sino también esperar el boot de la VM en sí.

## Que es un contenedor
Un contenedor es una agrupacion de procesos. y ejecuta los procesos de forma nativa (no como en una maquina virtual).

Los procesos que se ejecutan dentro de los contenedores, solo veran el contexto que esta dentro del contenedor. No puede ir fuera de ese contexto.

> Como la pelicula del show de truman.

Docker esta escrito en Go.

## Comandos basicos

cada docker run crea un contenedor nuevo, pero que comparten la infomacion.

- `docker ps` --> lista los contenedores
- `docker ps -a` --> lista contenedores a detalles
- `docker ps -aq` --> lista solo los ID de los contenedores (la q significa quiet, tranquilo o silencioso)
- `docker inspect id_contenedor` --> detalles internos del contenedor
- `docker inspect nombre_contenedor` --> lo mismo que el anterior
- `docker inspect -f {{ josn <\propertie>}} nombre_contenedor` --> filtra una variable especifico del contenedor
- `docker rm $(ps -aq)` --> borra TODOS los contenedores
- `docker rm nombre_contenedor` --> elimina un contenedor

### docker run ubuntu

cuando ejecutamos `docker run ubuntu`, generamos un contenedor con la especificacion de la ultima version de ubuntu.

Cuando hacemos un `docker ps -a`, veremos que se nos ha creado un nuevo contenedor, y en la pestaña `Command` veremos esto: `"/bin/bash"`.

Esto significa, que cuando corramos el contenedor, va a ejecutar el comando bin/bash, que en ubuntu es la ejecucion de su consola.

El problema esque nosotros tenemos una cosnola diferente, y si no queremos atachar a esta consola, tendremos que subscribirnos a ella. como? Con el flag `-it`

`docker run -it ubuntu`

nos atacharemos a la consola de la imagen que cree.

El significado de las flags -it:

- -t: Asignar un pseudo-tty (Terminal).
- -i: mantén STDIN abierto incluso si no está conectado.

## Ciclo de vida de un contenedor

Podemos ejecutar un contenedor que ya existe, añadiendole un commando diferente al pordefecto.

`docker run ubuntu tail -f /dev/null`

> tail, es un comando de Linux, que nos permitira listar el archivos

> -f significa que se mantenga la execucion, esperando nuevos archivos (nuevos cambios

> /dev/null, es una carpeta pelucioar de Linux, donde nunca hay ficheros, esta completamente vacia.

Una vez ejecutado el contenedo, si hacemos `docker ps` veremos esto:

![Imgur](https://i.imgur.com/Yx2ECFH.png)

como podemos ver, en `Command` ya podemos ver el comando que hemos ejecutado.

en Ubuntu, si ejecutamos `ps -fea` podemos ver todos los procesos que estan corriendo en el sistema. Por defecto, Docker siempre poner el commando de entrada en primer lugar, `PID 1` y cuando ese proceso termina, el contenedor se para.

Una de las formas de poder para esste proceso infinito, seria matando (`kill`) el proceso 1 y automaticamente se pararia el contenedor, o ejecutando el siguiente comando

`docker kill dreamy_lumiere` <-- container_name

Hay dos formas de parar un contenedor Docker

- un error en la ejecucion root
- terminar el proceso principal.

## Exponer nuestros Contenedores a cliente

Primero, para ver este tema, usaremos un servicio muy comun llamado `nginx` que permite levantar un servidor y almacenar datos.

`docker run -d --name server nginx`

el flag `-d` significa que no nos atacharemos a la consola de ese contenedor `--desatach`

Un contenedor no sabe nada sobre la red de donde esta corriendo, hemos de asignarle un puerto de salida para poder comunicarnos con el. Si a este comando, la añadimos el flag `-p` le estaremos asignando un puesto de nuestra maquina a ese contenedor.

`docker run -d --name server -p 8081:80 nginx`

el `8081` sera el puerto por donde podremos acceder a el, y el `80` sera el puerto por donde el contenedor tiene publica la entrada. De esta forma crearemos un puente entre nuestro Local y el contendor, pudiendo acceder desde un browser por ejemplo:

`localhost:8081`

Si nosotros volvemnos a crear o asignar el mismo puerto (8081) a otro contenedor, nos dara un error, ese puerto es unico, ya estara siendo usado.

```sh
2a53d87a33f1   nginx  "nginx -g 'daemon of…" 28 seconds ago   Up 27 seconds    0.0.0.0:8081->80/tcp server
```