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

## Creacion de una tarea freestyle

Jenkins siempre trabajara sobre tareas. Primero empezaremos con las de tipo `Project`.
para hacer una pequeña prueba, vamos a crear una, con el nombre Hello, y iremos al apartado `Ejecutar` y seleccionaremos el `Shell`. Para hacer nuestra primera prueba, escribiremos `Echo "Hello"`.

Apretamos a "Construir Ahora/Build now"

[Imgur](https://i.imgur.com/1Q1fDYd.png)

y veremos como la tarea se ejecuta correctamente, con el registro del usuario que lo ha ejecutado y mostrando en consola el "Hello" que hemos escrito
