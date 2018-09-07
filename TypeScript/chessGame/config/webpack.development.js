const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.css', '.less']
  },
//   module: {
//     rules: [
//       {
//         test: /(\.less|\.css)$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'less-loader']
//         })
//       }]
//   },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('style.css')
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
};