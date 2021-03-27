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
