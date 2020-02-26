var gulp = require('gulp')
var zip = require('gulp-zip')
// se ralizaára la siguiente tarea
gulp.task('Prueba', function () {
  console.log('Hello world!')
})

// con este metodo vamos a comprimir todo el src
gulp.task('default', function () {
  return gulp.src('src/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('dist'))
})
