var gulp = require('gulp')
var zip = require('gulp-zip')
const concat = require('gulp-concat')
var conventionalGithubReleaser = require('conventional-github-releaser')
var git = require('gulp-git')
var fs = require('fs')
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

gulp.task('github-release', function (done) {
  conventionalGithubReleaser({
    type: 'token',
    token: 'f9adfd7008c327be6d5560ad9278887cfe39aa49' // change this to your own GitHub token or use an environment variable
  }, {
    preset: 'angular' // Or to any other commit message convention you use.
  }, done)
})

gulp.task('commit', function () {
  return gulp.src('../*')
    .pipe(git.commit('Restauración de tag'))
})

gulp.task('push', function () {
  git.push('origin', function (err) {
    if (err) throw err
  })
})

gulp.task('new-tag', function (done) {
  var version = getPackageJsonVersion()
  git.tag(version, 'Created Tag for version: ' + version, function (error) {
    if (error) {
      return done(error)
    }
    git.push('origin', 'master', { args: '--tags' }, done)
  })

  function getPackageJsonVersion () {
    // Regresa la versión actual del package.json y es la que ingresa al tag
    return JSON.parse(fs.readFileSync('../package.json', 'utf8')).version
  }
})

gulp.task('release', gulp.series(
  'commit',
  'push',
  'new-tag'
))
