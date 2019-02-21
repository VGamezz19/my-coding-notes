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

## Datos en Docker

Vamos a crear un contenedor con `MongoDB` pero vamos a añadir un nuevo flag `-v`, con este flag podemos especificarle que espacio en memoria de nuestro local podra usar el contenedor para alamacenar los datos de Mongo.

Si no especificaramos una ruta para almacenar los datos, cuando nosotros eliminaramos el contenedor, la data desapareceria.

`docker run --name db -d -v <local-path>:<container-path> mongo`

`docker run --name db -d -v /Volumes/Victor/platzi-course-notes/docker/mongodata:/data/db mongo`

Hay una cosa a tener en cuenta, si nosotros añadimos algo desde fuera del contenedor en la carpeta `/Volumes/Victor/platzi-course-notes/docker/mongodata` esto se vera rapidamente reflejado en el contenedor.

Hemos creado un puente entre el dico local y el contenedor.

Asi podremos persistir los datos, y podremos eliminar y crear tantasveces que queramos el contenedor, que siempre mantendran los mismos datos.

> YEP!

Si añadimos el flar `-p 8080:27017` nos podremos contenctar a al contenedor y directametne al Mongo, metieante la herramienta `RoboMongo!`

`docker run -d --name mongo-db -v /Volumes/Victor/platzi-course-notes/docker/mongodata:/dCata/db -p 8082:27017 mongo`

## Docker Volumens

Ultimamente docker ha añadido una nueva funcionalidad que son los `Volumen`. Aqui podremos almacenar toda la data de los contenedores.

si ejecutamos `docker volume ls` veremos el listado de todos los volumenes que ha ido creando nuestros contenedores.

`docker volume prune` eliminara los volumenes de los contenedores que ahora mismo no se estan ejecutando

`docker volume create <nombre-del-volume>` nos creara un volumen

Esto lo podemos usar para persistir nuestros datos de la BBDD Mongo.

Usando el flag `--mount` 

`docker run -d --name db --mount src=dbdata,dst=/data/db -p 8082:27017 mongo`

en `src` podremos el nombre del volum, y en `dst` pondremos el destino de nuestros datos, que para mongo ha de ser `/data/db`

aunque eliminemos y volvamos a crear el contenedor, cuando volvamos a acceder al contenedor com `docker exec -it db bash` y `mongo` cuando accedamos a la tabla, veremos que persistne los datos

## Imagenes

Son plantillas con las que vamos a generar contenedores.

`docker pull` nos descarga una imagen, no crea nada.

Una imagen esta contruida por un conjunto de capas, por eso, cuando nos descargamos una, empiza a descargarse diversos "paquetes" (capas)

Cada capa es inmutable, no se pueden hackear. funcionan como el sistema de GIT, cada comit es la diferencia del anterior, pues lo mismo con las imagenes.

`docker image ls` listar imagenes

Docker Hub es como un GitHub pero de imagenes configuradas.

## Crear nuestra imagen de Docker

- Crear el archivo Dockerfile (receta)
- El dockerfile siempre debe empezar con el FROM le indicamos cual va a ser nuestra imagen base para empezar (Ubuntu por ejemplo)
- RUN para correr un comando

>DockerFile

```dockerfile
FROM ubuntu

RUN touch /usr/src/hola-platzi
```

execute `docker build -t <imagen>:<tag de la imagen> <path de donde vamos a obtener el contexto build, para este caso .>`

`docker build -t ubuntu:platzi .`

- **-t** es el nombre del tag de la imagen

![img](https://cdn-images-1.medium.com/max/2600/1*p8k1b2DZTQEW_yf0hYniXw.png)

Docker construyo un nuevo layer a la imagen base ubuntu

para poder publicarlo en DockerHub tenemos que lanzar el comando:

`docker pull ubuntu:platzi`

nos dara un error, porque no tenemos acceso para publicar dentro del repositorio de `ubuntu`, asique tendremos que asignarnos la imagen a nuestro perfil:

`docker tag abuntu:platzi dockergamez/ubuntu:platzi`

esto creara este esquema en las imagenes:

![Imgur](https://i.imgur.com/sqaZsBL.png)

las dos imagenes realmente ejecutaran el mismo comando.

y ya podriamos publicarlo en nuestro repositorio de DockerHub

`docker push dockervgamez/upuntu:platzi`

## Docker for developers

>Dockerfile

```Dockerfile
# usaremos un node-v8
FROM node:8

#le estamos especificando, que todo lo que encuentre aqui, lo copie en la carpeta `/usr/src/` del contenedor.
COPY [".", "/usr/src/"]

# positionate en el /usr/src para ejecutar el RUN
WORKDIR /usr/src

#Ejecuta NPM INSTALL en el WORKDIR
RUN npm install

# Expone el puerto del contenedor. Para luego poder abrir un puente entre mi puerto local y el del contenedor
EXPOSE 3000

# Cual es el comando por defecto que va a correr el contenedor por defecto, el COMMAND
CMD ["npx","nodemon", "index.js"]
# ejecuta el comando node index.js el cual levanta el servidor de express
# npx es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla
# nodemon es el paquete que nos va apermitir bajr y subir el server de manera automatica apenas exita un cambio en los archivos
# index.js es el archivo que levanta el servidor de express
```

ahora que tenemos el dockerfile configurado, vamos a generar una nueva imagen.

`docker build -t platziapp .`

Una veaz creada la imagen, tenemos que crear el contenedor. Como dato nuevo, podemos añadir el flag `--rm`, que eliminara el contenedor cuando termine la ejecucion de dicho contenedor.

`docker run --rm --name platziapp -p 3000:3000 platziapp`

lo exponemos en el puerto `3000`

## Cache Layers

Cuando nosotros volvamos a crear una imagen, se no hemos modificado el codigo, la imagen (las layers) estan cacheadas, y como ve que no hay ninguna modificacion, cogera la misma layer que ya hemos creado.

El problema es que si cambiamos cualquier BYTE  de nuestro codigo, volvera a ejecutar todos los comandos.

Hay una formade poder evitar dicho problema.

Si separamos los comandos de copy, por un lado la dependencia y por otro el codigo, la imagen tardara mucho menos en montarse. Porque no necesariamente siempre hemos de estar cambiando las dependencias  de nuestro proyecto:

```dockerfile
FROM node:lts

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npx", "nodemon", "index.js"]
# ejecuta el comando node index.js el cual levanta el servidor de express
# npx es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla
# nodemon es el paquete que nos va apermitir bajr y subir el server de manera automatica apenas exita un cambio en los archivos
# index.js es el archivo que levanta el servidor de express
```

a la primera vez que creemos la imagen, ejecutara todos los comandos, pero, cuando solo modifique el codigo, pasara esto: 

![Imgur](https://i.imgur.com/c0jf7kM.png)

usara la cache.

Para no tener que estar todo el rato creando una imagen cadavez que modificamos el codigo, podemos usar la aherramienta `nodemon` y dejar el proceso "watcheando" para ir bien el codigo y que no sea tan tedioso.

## Network Dokcer conectar contenedores

### Pasos a seguir

Para poder crear una conexion entre dos contenedores, la primera norma esque esten dentro de la misma red, y la segunda esque esten enlazados con un netword. Para crear un network tendremos que seguir estas instruccioned:

- `docker network create --attachable platzinet`;

hemos creado una network con el nombre `platzinet` y con la propiedad `attachable` para que otros conetenedores se puedan conectar.

Despues crearemos el contenedor con la BBDD de mongo, y attacharemos el contendor a la red.

- `docker run -d --name db docker`

una vez creado el contenedor, lo conectaremos a `platzinet`

- `docker network connect platzinet db`

Si inspenccionamos el network creado, veremos que nuestro contenedor se a attachado correctamente.

- `docker network inspect platzinet`

Despues creamos el contenedor con la imagen de nuestro codigo, pero pasando la variable de entorno donde esta alocado el host de nuestro contenedor de la BBDD

- `docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp`

estaremos creando un contenedor con el nombre `app` alojado en el puerto `3000` y con la variable de esntorno definida `MONGO_URL=mongodb://db:27017/test`

Lo bueno de las networks, es que cuando enlazamos un contenedor, y queremos acceder al IP virtual que se ha generado automaticamente, para poder acceder a el, simplemente  tendremos que poner el nombre del contenedor que esta corriendo

Por ultimo tendremos que contectar nuestro contenedor de app al network, para que se cree un puente entre ambos y se puedan comunicar.

- `docker network connect platzinet app`

### Borrar una redes en docker

`docker network rm <nombre de la red>`
Ej: docker network rm platzinet

### Crear una redes en docker

`docker network create --attachable <nombre de la red>``

—attachable es para que otros contenedores se puedan unir a esta red

Ej: docker network create --attachable platzinet

### Ver redes disponibles docker

`docker network ls`

- bridge red por defecto y se conectan con un keyword link esta en desuso, compatibilidad (deprecated)
- host simula la red del computador que corre docker (no usar)
- none hacer que tenga el network desabilitado

### Ver contenedores en un red

`docker network inspect <nombre de la red>``

Ej: docker network inspect platzinet
Detallar la busqueda
docker network inspect -f '{{.Containers}}' platzinet

### Unir un contenedor a la red creada

`docker network connect <nombre de la red> <nombre del contenedor>`

Ej: docker network connect platzinet db

docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb://db:27017/test platziapp

### Variable de entorno

-env variable de entorno
db es el nombre del contenedor sin necesidad de pasar la ip del contenedor para la conexión

## Docker Composer

utilziar el compose fil, que utiliza la extendial YML, para describir como queremos que sea nuestra aplicacion,

```yml
# La version del docker compose. Se recomienda usar de la 2 para arriba.
version: "3"

#Cuando hablamos de nuestra aplicacion, hablamos de servicios, no de contendores.
# La diferencia entre un servicio y un contenedor, esque un servicio puede tener más de un contenedor. Como podemos ver en esta especificacion.
services:
  app:
    image: platziapp
    environment:
      MONGO_URL: "mongodb://db:27017/test" # la variable de entorno del contenedor, con la IP virtualizada del contenedor `db`
    # la dependencia de nuestro contenedor
    depends_on:
      - db
    ports:
      - "3000:3000"

  db:
    image: mongo
```

ejecutamos el comando donde este el fichero Dockercompose.yml

`docker-compose up`

```sh
Creating network "docker-platzijs_default" with the default driver
Creating docker-platzijs_db_1 ... done
Creating docker-platzijs_app_1 ... done
Attaching to docker-platzijs_db_1, docker-platzijs_app_1
db_1   | 2019-02-21T14:35:13.906+0000 I CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
db_1   | 2019-02-21T14:35:13.909+0000 I CONTROL  [initandlisten] MongoDB starting : pid=1 port=27017 dbpath=/data/db 64-bit host=7d263ca5d710
db_1   | 2019-02-21T14:35:13.910+0000 I CONTROL  [initandlisten] db version v4.0.6
db_1   | 2019-02-21T14:35:13.910+0000 I CONTROL  [initandlisten] git version: caa42a1f75a56c7643d0b68d3880444375ec42e3
db_1   | 2019-02-21T14:35:13.910+0000 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016
db_1   | 2019-02-21T14:35:13.910+0000 I CONTROL  [initandlisten] allocator: tcmalloc
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten] modules: none
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten] build environment:
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten]     distmod: ubuntu1604
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten]     distarch: x86_64
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten]     target_arch: x86_64
db_1   | 2019-02-21T14:35:13.911+0000 I CONTROL  [initandlisten] options: { net: { bindIpAll: true } }
db_1   | 2019-02-21T14:35:13.912+0000 I STORAGE  [initandlisten] 
db_1   | 2019-02-21T14:35:13.912+0000 I STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
db_1   | 2019-02-21T14:35:13.912+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
db_1   | 2019-02-21T14:35:13.913+0000 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=487M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=(recovery_progress),
db_1   | 2019-02-21T14:35:14.635+0000 I STORAGE  [initandlisten] WiredTiger message [1550759714:635705][1:0x7fb95f667a40], txn-recover: Set global recovery timestamp: 0
db_1   | 2019-02-21T14:35:14.647+0000 I RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
db_1   | 2019-02-21T14:35:14.663+0000 I CONTROL  [initandlisten] 
db_1   | 2019-02-21T14:35:14.663+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
db_1   | 2019-02-21T14:35:14.663+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
db_1   | 2019-02-21T14:35:14.663+0000 I CONTROL  [initandlisten] 
db_1   | 2019-02-21T14:35:14.664+0000 I STORAGE  [initandlisten] createCollection: admin.system.version with provided UUID: 14b9386f-97b6-4d94-9148-c52a0ec9246b
db_1   | 2019-02-21T14:35:14.678+0000 I COMMAND  [initandlisten] setting featureCompatibilityVersion to 4.0
db_1   | 2019-02-21T14:35:14.693+0000 I STORAGE  [initandlisten] createCollection: local.startup_log with generated UUID: 0dda3d51-8c21-44f4-9240-d7fb2ccfbef4
db_1   | 2019-02-21T14:35:14.712+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/data/db/diagnostic.data'
db_1   | 2019-02-21T14:35:14.714+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
db_1   | 2019-02-21T14:35:14.722+0000 I STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with generated UUID: 3541311d-f387-48c4-98e8-567a346080ba
db_1   | 2019-02-21T14:35:14.743+0000 I INDEX    [LogicalSessionCacheRefresh] build index on: config.system.sessions properties: { v: 2, key: { lastUse: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 }
db_1   | 2019-02-21T14:35:14.744+0000 I INDEX    [LogicalSessionCacheRefresh] 	 building index using bulk method; build may temporarily use up to 500 megabytes of RAM
db_1   | 2019-02-21T14:35:14.745+0000 I INDEX    [LogicalSessionCacheRefresh] build index done.  scanned 0 total records. 0 secs
app_1  | [nodemon] 1.18.7
app_1  | [nodemon] to restart at any time, enter `rs`
app_1  | [nodemon] watching: *.*
app_1  | [nodemon] starting `node index.js`
app_1  | Hola que tal Testing Debuging with Docker yepa
app_1  | Server listening on port 3000!
```

y vemos que se ha creado primero el contendor `db` y despus `app`

Con esto, me he ahorrado tener que crearmo un network, enlazarlos y contectarlos. lo hace automaticamente.

`docker network ls`

```sh
NETWORK ID          NAME                      DRIVER              SCOPE
e6c2fee97c76        bridge                    bridge              local
2f2e37aaf807        docker-platzijs_default   bridge              local
766cbb33d2d6        host                      host                local
a7ada91cdcb7        none                      null                local
```

## More about DockerCompose

### Detener contenedores en docker-compose

`docker-compose down``

Para los contenedores y los borra incluyendo el network

### Entrar a un contenedor montado con docker-compose

`docker-compose exec <nombre del servicio> bash`

Ej: docker-compose exec app bash

### Ver logs de los contenedores montados con docker-compose

`docker-compose logs <nombre-del-servicio`

### Ver el status de docker-compose

`docker-compose ps`

### Ejecutar contenedores en segundo plano docker-compose

`docker-compose up -d``

- -d = —detach Corre en segundo plano (No muestra el output)