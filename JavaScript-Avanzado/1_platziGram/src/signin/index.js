const   page = require('page')
const   yo = require('yo-yo')
const   empty = require('empty-element')
const   template = require('./template')

page('/signin', (ctx,next) => {
  document.title='Platzigram - Signin'
  let main = document.getElementById('main-container')
  empty(main).appendChild(template)
})