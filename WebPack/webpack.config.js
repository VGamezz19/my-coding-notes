const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: path.resolve(__dirname, 'bundle.js')
  }
}
