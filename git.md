# [← |](https://github.com/VGamezz19/platzi-course-notes)   GIT

## Introduccion

Nunca trabajaremos directamente sobre la rama `Master`, siempre tendremos que trabajar sobre una rama temporal paralela (dev/develop)
```
compi	         __.__.__.__
dev        _._._/_._.__.____\         _.__.__.__
master____/_________\._______\.______/__________  ...

```

Lo que se intenta representar en el dibujo, es que en la rama `master` solo ejecutaremos un `commit` cuando sepamos que la version que tenemos en `dev` es estable, hacemos un `merge`

````
para hacer un merge, apuntamos a la rama (en este caso master)
y efectuamos el merge del codigo de una rama a otra, en este caso seria
git merge dev (desde master)
```` 

la tercera "rama" que se ve `compi` representa la linea de tiempo del `local` de cada persona del `team develop`. Cada programador se hace su propia rama de la rama `dev` y cuando terminan su tarea, la `mergean` en dev.
````
Se ha de tener en cuenta, que si en la rama dev hay cambios, 
tendremos que hacer un request de esos datos con:
git pull origin dev (en este caso), fijar y arreglar si hay algun comflicto
y finalmente, pushear el merge.
````

## **Fork** Es la forma de clonarte el repositorio de un `frameWork`, `libreria`, `modulo`, etc. Añadir alguna sugerencia/issue (problemas) y hacer un `pull request`

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana01/public/fork.jpg)

Voy a describir los pasos para hacer un `fork` y un `pull request` basandome en la imagen anterior:

-	Hacemos un nuevo Fork sobre el repositorio que queramos añadir cosas nuevas. Esto creara una copia exacta en tu git del servidor (en este caso gitHub)

-	Efectuamos un `git clone` para añadirlo a nuestro local

-	En nuestro local, trabajamos sobre la rama indicada (segun lo hablado con el que ha realizado ese proyecto, nunca en master)

-	Despues realizamos un push a nuestro servidor

-	Generamos un `pull request`, y la comunidad e ingenieros de esa plataforma, veran si la implementazion es valida.

-	Si confirman tu `pull request` lo `mergeeran` a `master`

-	Puede darse la casuística, de que el repositorio que te `"forkeaste"` quede obsoleto, ya que han implementado cosas nuevas en el repositorio de produccion. Entonces simplemente tendremos que hacer un `fetch` a nuestro repositorio `local` y finalmente `pushearlo` a gitHub.

## **Git fetch** 

Siempre usaremos el `git fetch` cuando tengamos que `mergear` los datos del repositorios main del fork, a nuestro repositorio local
Primero configuramos el `remote` añadiendo un nuevo parámetro “upstream”
````
para ver que configuracion tenemos de los repositorios remotos --> git remote -v
````

Dentro del nuevo cambo de `upstream` añadiendiremos la URL del clone del proyecto (el que hemos hecho Fork)
`git remote add upstream https://github.com/manuelbarzi/skylab-bootcamp-201801.git`

Despues requerimos la informacion del repositorio `main` con un `fetch` **Desde MASTER**

`git checkout master  [then]  git fetch upstream`

y despues `git merge upstream/master`

Por ultimo mergeeamos la rama develop. 

### **Crear un nuevo Pull Request con otro abierto**

He de crear una nueva rama con un nombre adecuado (normalmente se le pone de nombre algo especifico con lo que vas a trabajar), igualas master a esa nueva `branch` y cuando terminas de trabajar. hacer un `new pull request` desde la `new branch` de tu Fork, al proyecto origina `dev, nunca master`.
Si quiero crear una  nueva PR, tendre que crear una nueva rama desde el `fetch del origina`. Me posiciono haciendo un `git checkout upstream/develop` y despues crear una rama com `git checkout -b @nombreRama`

En los Pull Request siempre hay revisores de codigo (3) y hasta que los revisores no den el visto bueno al codigo que se quiere `meergear` en `master`, no se podra mergear en master (valgame la reduncancia)

## **Git stash**

Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.

### ¿Como usarlo?

Para usarlo correctamente, seguir ordenadamente los pasos definidos a continuacion:

- git stash
- do somthing about this/other branche/s (pull, merge, etc)
- git stash pop

## ** Track bran**

Podemos pullearnos luna rama remota usano este commando:

`git checkout --track origin/daves_branch`
