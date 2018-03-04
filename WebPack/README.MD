# Webpack

## 5- Creando el primer bundle

Tenemos que especificar un Entrypoint (en nuestro caso Index.js) y después el fichero output (bundle.js) y por ultimo especificar en nuestro package.json el comando que va a ejecutar Webpack.

En la nueva version de `webpack-v4.0.1` es necesario intalar `webpack-cli`

`"build": "webpack js/index.js -o js/bundle.js --mode development"`

## 6- Creando un webpack.config

Para especificar a webpack el entrypoint y el output, tendremos que crear un `webpack.config.js`

```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    filename: path.resolve(__dirname, 'js/bundle.js')
  }
}
```

Usamos el modulo de node `path` para especificar la raiz del directorio, y despues ejecutamos un `resolve` para que se pueda leer tanto en sistemas `unix` como `windows`

Lo exportamos como un modulo de `commonJS` para que `webpack` pueda recuperar la configuracion.

Despues, en nuestro `package.json` añadimos el script --> `"build:local": "webpack"`
`webpack` detectara nuestro fichero `*.config.js` por defecto.

## 7- Configuracion de rutas relativas

Si tenemos ficheros `*.config.js` en nuestro proyecto, tendremos que modificar la forma de llamarlo en el `package.json`.

```jsdon
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack js/index.js -o js/bundle.js --mode development",
    "build:local": "webpack"
    "build:external" : "webpack --config ./ruta/del/fichero/*.config.js"
```

Para poder distribuir mejor los archivos, necesitaremos especificar el `__dirname` (en este caso es `./esternal`)

```js
module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  }
}
```

Con la propiedad `output: { path:`, especificamos a `webpack` que va a crear una nueva carpeta donde añadia el `bundle.js`

## 8- Loaders

Los `Loaders` nos van a permitir cargar multiples ficheros javascript dentro de un archivo javaScript.

Se cargan dentro del fichero de configuracion `modules>rules`.

```js
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aqui van los loaders
            {
                // test: "que tipo de archivo quiero reconocer",
                // use: "que loader se va a encargar del archivo (el tipo de extension)"
            }
        ]
    }
}
```

Ejemplo de un Loader que renderiza Css:

Necesitaremos instalar los **Plugins** de **WP** `yarn add style-loader css-loader --dev`

```js
rules: [
    //Aqui van los loaders
    {
        // test: "que tipo de archivo quiero reconocer",
        // use: "que loader se va a encargar del archivo (el tipo de extension)"
        test: /\.css$/, //solo leera los ficheros con extension Css
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ['style-loader', 'css-loader']
    }
]
```

## 9- Plugins

Sirven para hacer cosas extras o más generales. En este caso, vamos a mover el archivo que webpack procese, a la carpeta **output** `dist`.

Los loaders si o si van a ser para interpretar tipos de archivos, mientras que los plugins pueden hacer cosas extras o más generales. Por ejemplo comprimir archivos de imagen, usar uglify. En resumen los plugins hacen todo lo que no haría un loader.

Intalamos el plugin `extract-text-webpack-plugin` y lo usamos:

```js
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//. . .

 module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css")
    new ExtractTextPlugin("css/[name].css")
  ]
```

generando un :

```sh
.
├── dist
│   ├── bundle.js
│   └── css
│       └── main.css
├── index.html
├── index.js
├── style.css
└── webpack.config.js
```

## 10- Multiples Entry Points

Podemos configurar WP para que acepte Multiples EntryPoint

```js
module.exports = {
  // entry: path.resolve(__dirname, 'index.js'),
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
    precios: path.resolve(__dirname, 'src/js/precios.js'),
    contacto: path.resolve(__dirname, 'src/js/contacto.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
```

[name].js --> equivaldra al nombre que le hemos especificado en la configuracion del `entry`

```sh
.
├── dist
│   ├── bundle.js
│   ├── css
│   │   └── main.css
│   └── js
│       ├── contacto.js
│       ├── home.js
│       └── precios.js
├── src
│   ├── css
│   │   └── style.css
│   └── js
│       ├── contacto.js
│       ├── index.js
│       └── precios.js
├── index.html
├── precios.html
├── contacto.html
└── webpack.config.js
```

## 11- Webpack DevServer

Podemos automatizar el bundle de **WP** con `webpack-dev-server`

`yarn add --dev webpack-dev-server`

`"build:dev": "webpack-dev-server --config ./webpack-dev-server/*.config.js"`

Esto levantara un servidor con nuestros archivos, y cada vez que guardemos nuestros cambios, se refrescaran automaticamente.

añadimos en nuestro `index.html` --> `<script src="http://localhost:8080/bundle.js"></script>`, el bundle que se ira refrescando automaticamente.

### Configuracion DevServer

[config-webpack-server](https://webpack.js.org/configuration/dev-server/)

Al parecer hay algunas opciones que pueden definirse en la sección devServer en el archivo webpack.config.js, mientras que otras sólo funcionan si se ejecutan desde la interfaz de línea de comando CLI.

### Opciones para webpacke-dev-server CLI

`--content-base <file/directory/url/port>`

define la ruta base para los contenidos

`--quiet`

no mostrar salidas a la consola

`--no-info`

omitir la información innecesaria

`--colors`

añadir color a los mensajes de salida

`--no-colors`

no usar colores en los mensajes de salida

`--host <hostname/ip>`

define nombre o IP del host

`--port <number>`

define qué puerto usar

`--inline`

incorpora la webpack-dev-server runtime en el paquete

`--hot`

añadir el HotModuleReplacementPlugin y pasar a modo en caliente (hot).
NOTA: se debe evitar la habilitación doble: por parametros en el webpack.config.js + vía CLI.

`--hot --inline`

similar a webpack/hot/dev-server

`--lazy`

no habilita la observación (watch), debe evitarse el uso con --hot.

`--https`

inicia el servidor webpack-dev-server sobre el protocolo HTTPS.
Incluye un certificado digital auto-firmado para atender los requests.

`--cert, --cacert, --key`

indicar las rutas de ubicación de los archivos del certificado

### Opciones que aplican al archivo webpack.config.js:

`noInfo`

Omite mostrar información innecesaria en la consola

Default: false

`quiet`

No muestra nada en la consola

Default: false

`lazy`

Cambia al modo lazy

Default: false

`filename`

en modo lazy: el cambio de peticiones dispara la recompilación
En la mayoría de los casos funciona igual que la configuración output.filename de js.

`watchOptions.aggregateTimeout`

Retrasa la recompilacion luego de los cambios. El valor es en ms.

Default: 300

`watchOptions.poll`

true: usa chequeo

numero: usa el chequeo en intervalos

Default: undefined

`publicPath`

la ruta para enlazar el middleware con el servidor.
En la mayoría de los casos es la misma que la configuracion output.publicPath del js.

`headers`

añadir cabeceras personalizadas. i. e. { “X-Custom-Header”: “yes” }

`stats`

Muestra en la salida opciones estadísticas.

```js
//*.config.js
//. . .

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        after(app){
          console.log('======== after ==========')
          console.log(app)
          // do fancy stuff
        },
        before(app) {
          console.log('======== before =========')
          console.log(app)
        }
      },
```

## 12 - Soporte de Ecmascript

Podemos escribir cualquier tipo de JS y que lo soporte cualquier navegador gracias a WP y bable-loader.

[babel-loader](https://github.com/babel/babel-loader)

`yarn add babel-loader babel-core babel-preset-es2015 babel-preset-es2016 --dev`

Despues de instalarnos el paquete, dentro de la configuracion de nuestro `webpack`, especificamos un nuevo loader, que trara con `js`.

Cuando se trata de un `Loader` un poco más especifico y más concreto, añadimos la `key` **loader** y especificamos el loader que va a utilizar, en este caso `babel-loader`.

```js
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
```