# DENO

Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.

It's built on V8, Rust, and Tokio.

[RTFM Deno](https://deno.land/manual)

> Deno aims to be a productive and secure **scripting** environment for the modern programmer.

Por defecto Deno es seguro, y pedira que confirmes algunas de las acciones que se dan por hecho.

incluso si queremos hacer el fetch de una pagina web, tendremos que darle los permisos para poder leerla.

como en este ejemplo:

El ejecutar este comando

> deno run https://deno.land/std@0.91.0/examples/curl.ts https://example.com

> curl.ts

```ts
const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
```

nos dara error, ya que no le hemos especificado con pueda leer esa URL

> deno run --allow-net=example.com https://deno.land/std@0.91.0/examples/curl.ts https://example.com

## Command line

Deno is a strong commandline lenguage, so, consider that:

Separately from the Deno runtime flags, you can pass user-space arguments to the script you are running by specifying them after the script name:

> deno run main.ts a b -c --quiet

```ts
// main.ts
console.log(Deno.args); // [ "a", "b", "-c", "--quiet" ]
```

Note that anything passed after the script name will be passed as a script argument and not consumed as a Deno runtime flag. This leads to the following pitfall:

### Permissions args

Read [this](https://deno.land/manual/getting_started/permissions)

#### Network access

> fetch.ts:

```js
const result = await fetch('https://deno.land/');
```

This is an example of how to allow-list hosts/urls:

> deno run --allow-net=github.com,deno.land fetch.ts

If fetch.ts tries to establish network connections to any other domain, the process will fail.
