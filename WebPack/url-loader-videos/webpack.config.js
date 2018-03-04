const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: "./dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              mimetype: "video/mp4",
              name: 'videos/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(webm)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              mimetype: "dis/video/webm",
              name: 'videos/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css")
    new ExtractTextPlugin("css/[name].css")
  ]
}