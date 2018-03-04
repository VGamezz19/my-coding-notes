const   page = require('page')
const   yo = require('yo-yo')
const   empty = require('empty-element')
const   template = require('./template')
//const   superagent = require('superagent')
const   header = require('../header')
//const   axios = require ('axios')

// const loadPictures = (ctx, next) => { //en page siempre recive, context, y next
//   superagent
//       .get('/api/pictures')
//       .end( (err,res) => {
//         if(err) return console.log(err)
//         ctx.pictures = res.body

//         next() //para pasar a la proxima funcion de PAGE 
//       })
// }

// const loadPicturesAxios = (ctx, next) => { //en page siempre recive, context, y next
//   axios
//       .get('/api/pictures')
//       .then( (res) => {
//         ctx.pictures = res.data
//         next()
//       })
//       .catch((err)=> {
//           return console.log(err)
//       })
// }

// const loadPicturesFetch = (ctx, next) => {
//   fetch('/api/pictures')
//       .then( (res) => {
//         return res.json()
//       })
//       .then((pictures)=>{
//         ctx.pictures = pictures
//         next()
//       })
//       .catch((err)=> {
//           return console.log(err)
//       })
// }

// const loadPicturesFetch = (ctx, next) => { 
//   fetch('/api/pictures')
//       .then( res => {
//         return res.json()
//       })
//       .then((pictures)=>{
//         ctx.pictures = pictures
//         next()
//       })
//       .catch((err)=> {
//           return console.log(err)
//       })
// }

async function asyncLoad(ctx, next){
  try {
    ctx.pictures  = await fetch('/api/pictures').then(res => res.json())
    next()  
  } catch (err){

  }
}

page('/', header, asyncLoad, (ctx,next) => {
  document.title='Platzigram'

  let main = document.getElementById('main-container')

  empty(main).appendChild(template(ctx.pictures))
})
