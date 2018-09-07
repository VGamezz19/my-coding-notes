const { resolve } = require('path');
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  root: resolve(__dirname, '../'),
  src: resolveApp('src'),
  build: resolveApp('build'),
  public: resolveApp('public'),
  nodeModules: resolveApp('node_modules'),
};