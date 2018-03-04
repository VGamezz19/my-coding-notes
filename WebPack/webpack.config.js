const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  output: {
    filename: path.resolve(__dirname, 'js/bundle.js')
  }
}
