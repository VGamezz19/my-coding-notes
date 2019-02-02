# ReadFile && CallBacks

Para ver todos los modules y metodos internos de node, podemos acceder a su documentacion.

Por norma general, cuando a un metodo interno de node le pasamos un `callback`. El primer parametro sera el de error. `error first`

```js
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```