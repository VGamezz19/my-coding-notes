# DENO

Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.

It's built on V8, Rust, and Tokio.

[RTFM Deno](https://deno.land/manual)

> Deno aims to be a productive and secure **scripting** environment for the modern programmer.

example

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

Allow net calls to any host/url:

> deno run --allow-net fetch.ts

#### Debugging

To activate debugging capabilities run Deno with the `--inspect` or `--inspect-brk flags`.

The `--inspect` flag allows attaching the debugger at any point in time, while `-`-inspect-brk` will wait for the debugger to attach and will pause execution on the first line of code.

Example:

> deno run --inspect-brk --allow-read --allow-net https://deno.land/std@0.91.0/http/file_server.ts

Open `chrome://inspect` and click `Inspect` next to target.

#### VSCode Debugging

create `launch.json`

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Deno",
			"type": "pwa-node",
			"request": "launch",
			"cwd": "${workspaceFolder}",
			"runtimeExecutable": "deno",
			"runtimeArgs": ["run", "--inspect-brk", "-A", "${file}"],
			"attachSimplePort": 9229
		}
	]
}
```

## Managing dependencies

In Deno there is no concept of a package manager as external modules are imported directly into local modules. This raises the question of how to manage remote dependencies without a package manager. In big projects with many dependencies it will become cumbersome and time consuming to update modules if they are all imported individually into individual modules.

The standard practice for solving this problem in Deno is to create a deps.ts file. All required remote dependencies are referenced in this file and the required methods and classes are re-exported. The dependent local modules then reference the deps.ts rather than the remote dependencies. If now for example one remote dependency is used in several files, upgrading to a new version of this remote dependency is much simpler as this can be done just within deps.ts.

With all dependencies centralized in deps.ts, managing these becomes easier. Dev dependencies can also be managed in a separate dev_deps.ts file, allowing clean separation between dev only and production dependencies.
