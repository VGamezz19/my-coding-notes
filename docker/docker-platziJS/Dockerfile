FROM node:lts

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["npx","nodemon", "index.js"]
# ejecuta el comando node index.js el cual levanta el servidor de express
# npx es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla
# nodemon es el paquete que nos va apermitir bajr y subir el server de manera automatica apenas exita un cambio en los archivos
# index.js es el archivo que levanta el servidor de express
