var gulp = require('gulp')
var zip = require('gulp-zip')
const concat = require('gulp-concat')
var git = require('gulp-git')
var tagVersion = require('gulp-tag-version')
// const uglify = require('gulp-uglify')
// se ralizaára la siguiente tarea

gulp.task('Prueba', function () {
  console.log('Hello world! .')
})

// con este metodo vamos a comprimir todo el src
gulp.task('prueba1', function () {
  // regresa dos niveles atras y comprime la carpeta public y la pone en destino
  return gulp.src('../public/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('distino'))
})

gulp.task('compilar', function js () {
  return gulp.src('../*.js') // agarra todos los archivos .js
    .pipe(concat('Compilado.js')) // hace un archivo Compilado.js y copia todo lo que tenía del paso anterior
    .pipe(gulp.dest('Destino')) // lo deposita dentro de una carpeta Destino
})

gulp.task('commit', function () {
  return gulp.src('../*')
    .pipe(git.commit('Prueba1'))
   
})

gulp.task('push', function () {
  git.push('origin', 'master', function (err) {
    if (err) throw err
  })
})

// Tag the repo with a version
gulp.task('tag', function () {
  git.tag('v1.1.', 'Version message', function (err) {
    if (err) throw err
  })
})
