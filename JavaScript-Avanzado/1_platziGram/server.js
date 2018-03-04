const   express = require('express'),
        app = express(),
        multer  = require('multer'),
        ext = require('file-extension');

let pictures = [ 
  {
    user: {
      username: "vgamez",
      avatar : "https://avatars2.githubusercontent.com/u/14943217?s=400&u=c59048e8a270e05e1e01b2c7244e200257656071&v=4"
    },
    url: 'office.jpg',
    likes : 0,
    liked : false,
    createdAt : new Date().getTime()
  },
  {
    user: {
      username: "vgamez",
      avatar : "https://avatars2.githubusercontent.com/u/14943217?s=400&u=c59048e8a270e05e1e01b2c7244e200257656071&v=4"
    },
    url: 'office.jpg',
    likes : 1,
    liked : false,
    createdAt : new Date().setDate(new Date().getDate() - 10)
  }
]

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

        //Le decimos que utilizara PUG para renderizar
app.set('view engine', 'pug')

//Un nuevo Point, indicandole al servidor Web
//Que se sirva este directorio PUBLIC de manera estatica
//Va a ser algo virtual.

app.use(express.static('public'))
//Especificamos que en la rusa '/user/:user' va a tener su propia raiz de public
app.use('/user/:user', express.static('public'));

// ======== MIDELLWARE =============
// const restrict = (req, res, next) => {
//     if(req.user) return next() //se jecuta el proximo midelware
//     res.redirect('/signup')
// }                               //restrict, (req, res)
app.get(['/', '/signup', '/signin','/user/:user'], (req,res) => { 
    
  if (req.url === '/signup') return res.render('index', {title : 'Platzigram - Signup'})
  if (req.url === '/signup') return res.render('index', {title : 'Platzigram - Sigin'})
  
  return res.render('index', {title : 'Platzigram'}) 
    
    //Tambien podemos hacer app.get('*')
    // Coje todas las rutas de las paginas
})

app.get('/api/pictures',(req,res) => {
  res.send(pictures)  
})

app.get(`/api/user/:user`,(req,res)=> {
  let username = req.params.user
  setTimeout(()=> {
    res.send(pictures.filter((element)=>{
      if(element.user.username === username) return true;
    }))
  },2000)
})

app.post('/api/pictures', (req,res) => {
  upload(req,res,(err => {
    if (err) return res.send(500, "Error uploading File")

    res.send("File Updatet Nice")
  }))
})

app.listen(5000, (err)=>{ 
    if(err) return console.log("Hubo un error"), process.exit(1)
    console.log("Todo correcto")
}) 