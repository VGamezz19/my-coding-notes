const   page = require('page')
// const moment = require('moment');
// require('moment/locale/es');
// moment.locale('es')
require('babel-polyfill')
require('regenerator-runtime/runtime');

require('./homepage')
require('./signup')
require('./signin')
require('./landing')
require('./user')
require('./footer')

page()
