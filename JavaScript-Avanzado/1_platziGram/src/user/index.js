const   page = require('page')
const   yo = require('yo-yo')
const   empty = require('empty-element')
const   template = require('./template')
const   header = require('../header')



page('/user/:user', header, (ctx,next) => {
    let user = ctx.params.user;
    document.title=`Platzigram - ${ctx.params.user}`

    fetch(`/api/user/${user}`)
    .then(res => res.json() ) //loader y printar
    .then(res => {
        let main = document.getElementById('main-container')
        empty(main).appendChild(template(res))
    })

    
  
  })