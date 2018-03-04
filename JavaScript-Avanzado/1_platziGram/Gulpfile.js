
const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        rename = require('gulp-rename'),
        babel = require('babelify'),
        browserify = require('browserify')
        source = require('vinyl-source-stream'),
        watchify = require ('watchify')

    gulp.task('styles',  () =>{
        gulp
            .src('./scss/app.scss')
            .pipe(sass())
            .pipe(rename('app.css'))
            .pipe(gulp.dest('public'))
    })

    gulp.task('assets', () => {
        gulp
            .src('assets/*')
            .pipe(gulp.dest('public'))
            //glob son expresio es regulares para apuntar archivos
    })

    gulp.task('scripts', () => {
        //Renderizamos el Index.JS
        browserify('./src/index.js')
            .transform(babel, {presets: ['env']})
            .bundle()
            .on('error', function (err) {console.log(err); this.emit('end')})
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'))
        //Source nos permitira renderizar el JS
        // npm i --save-dev vinyl-source-stream

    })

    //De esta forma con la libreria WACHIFY podemos especificar que archivos queremos
    //que este mirando Gulp
    const compile = (watch) => {
        let bundle = watchify(browserify('./src/index.js')),
            rebundle = ()=> {
                bundle
                    .transform(babel, {
                        "presets": [
                          ["env"]
                        ],
                        "plugins": [
                          ["regenerator-transform", "transform-runtime"]
                        ]
                      })
                    .bundle()
                    .pipe(source('index.js'))
                    .pipe(rename('app.js'))
                    .pipe(gulp.dest('public'))
                    //Source nos permitira renderizar el JS
                    // npm i --save-dev vinyl-source-stream
            }
        if(watch) {
            //bundle tiene un metodo ON que admite un STRING, 
            //al pasarle la string UPDATE, bundle ejecutara unuetras funcion
            bundle.on('update', () => {
                console.log(" --> Building ...");
                rebundle()
            })
        }

        rebundle()
    }
    gulp.task('build',() => compile());
    gulp.task('watch', () => compile(true));
    //Le decimos que task ha de ejecutar
    gulp.task('default', ['styles', 'assets', 'build'])


    
    // //De esta segunda forma, no es tan "Rentable" porque actualiza todas las TASK
    // //que tienes en GULP
    // let watched = () => {
    //     console.log('Watching over your project platzigram')
    //     gulp.watch(
    //         ['./src/*.js', './views/*.pug', './scss/*.scss', './assets/*.*'],
    //         ['styles','scripts','assets'], (event)=>{
    //             console.log(`Event ${event.type} ended`)
    //         }
    //     )
    // }

    // //Le decimos que task ha de ejecutar
    // gulp.task('watch', [], watched() )
    