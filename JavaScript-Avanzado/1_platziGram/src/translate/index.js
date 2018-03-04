if(!window.Intl){
    window.Intl = require('intl')
    require('intl/locale-data/jsonp/en-US.js')
    require('intl/locale-data/jsonp/es.js')
  }

let IntlRelativeFormat = window.IntlRelativeFormat =  require('intl-relativeformat');
let IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

let rf = new IntlRelativeFormat('en-US')

let es = require('./es')
let en = require('./en-us')

var MESSAGES = {};

MESSAGES.es = es;
MESSAGES['en-US'] = en; //Lo ponemos en ['en-US] porque es mala praxis poner MESSAGES.en-US --> -

let locale =  localStorage.locale ||'es'

module.exports = {
    message : (text, opts = {}) => { //opts = {} es como decirle, que si no le llega nada, sera un objeto vacio
        var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
        return  msg.format(opts)
    },
    date : new IntlRelativeFormat(locale)
}