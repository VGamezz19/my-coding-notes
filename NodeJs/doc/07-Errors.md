# Errores

## Standar Javascript errors

Errores de sintaxis, de evaluación, contrucción de URIs, etc.

## System errors

Cuando se falla en la lectura de algún archivo, etc.

## User-specified errors

Cuando lanzamos un Throw y especificamos un mensaje personalizado.

## Assertion Errors

Errores que definen aspectos lógicos dentro de Node.js. Violaciones de lógica como TRUE == FALSE, por ejemplo

> IMPORTANTE

```js
module.exports = {
    errorFirstCallbackWrong: function() {
        try {
            fs.readFile('/some/file/that/does-not-exist', (err, data) => {
                // mistaken assumption: throwing here...
                if (err) {
                    throw `This is a sync ${err}`;
                }
            });
        } catch (err) {
            // This will not catch the throw!
            console.error(`Catched err: ${err}`);
        }
    },
    errorFirstCallback: function() {
        fs.readFile('/some/file/that/does-not-exist', (err, data) => {
            if (err) {
                console.error('This error-first callback', err);
                return;
            }
            console.log(data);
        });
    }
}
```

El primer metodo, no entrara en el `catch` del trycatch, ya que, dentro del handdler del error del callback (first param error) estamos haciendo un throw y esto expulsa la ejecucion de la funcion, y el trycatch no lo detectaria