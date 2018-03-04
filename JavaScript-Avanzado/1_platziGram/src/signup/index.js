const   page = require('page')
const   yo = require('yo-yo');
const   empty = require('empty-element');
const   template = require('./template');
//const   title = require('title')



page('/signup', (ctx,next) => {
 // title('Platzigram - Signup')
  document.title= 'Platzigram - Signup'
  let main = document.getElementById('main-container')
  empty(main).appendChild(template)
})