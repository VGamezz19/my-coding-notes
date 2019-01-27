# Introducción a funciones asíncronas

Las funciones en terminos de sincronizado pueden ser:

## Síncronas

- De acción bloqueante del hilo de proceso.
- No libera recursos hasta terminar.

## Asíncronas

- De acción no bloqueante del hilo de proceso (por delegación).
- Permite ejecución de otras instrucciones mientras finaliza.

Las implementaciones asincronas se utilizan para delegar tareas intensivas
en ciclos de CPU, como por ejemplo:

- Cifrado
- Compresión
- Proceso de datos
- Peticiones de red (HTTP, DNS, etc..)
- Peticiones a servicios (Base de datos, etc...)