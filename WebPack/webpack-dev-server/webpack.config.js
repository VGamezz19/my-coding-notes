const path = require('path')

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
    module: {
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
    }
}