# Jekins

## Introduccion

Como desarolladores, la automatizacion de tareas es muy importante en nuestro trabajo y Jenkins nos ayudara a realizar dichas automatizaciones.

Jenkins es el software mas usado del muno. Esta escrito en Java y lo puedes hacer funcionar en cualquier sistema operativo.

Es muy extensible y tiene una gran variadad de plugins ya que tiene una gran comunidad detras.

Jenkins te permite escalar tanto horizontal y verticalmente.

## Instalacion y Configuracion

### In Local

Dowload Jenkins [here](https://jenkins.io/download/)
Cuando ya lo tengamos instalado, tendremos que abrir nuestro navegador e ir a la ruta local `localhost:8080`.
Podremos acceder al panel de control de jenkins, pero antes nos pedira la contraseña de administrador que ha generado en sus logs. La encontraremos en esta ruta.

`cd /var/log/jenkins/jenkins.log`

### In Docker

Nos instalaremos Docker en nuestra maquina local. y despues instalaremos la imagen de jenkins con un `docker pull jenkins:jenkins`

Despues crearemos el contenedor con un workspace de jenkins en `var/jenkins` con este comando:

`docker run -p 8088:8088 -p 50000:50000 jenkins/jenkins:lts`

Toda la iformacion y plugins se almacenaran en `var/jenkins`.

`docker ps` list los contenedores docker corriendo en tu maquina
`docker inspect --format '{{ .NetworkSettings.IPAddress }}' <CONTAINER_ID>` mostrara la IP de tu contenedor.