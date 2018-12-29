// Adiciona os modulos instalados
const gulp = require('gulp');

const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Função para juntar o JS
function gulpJS() {
  return gulp
  .src('src/*.js')
  .pipe(concat('main.js'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest("dist/"))
}

gulp.task('mainjs', gulpJS);



// Função de watch do Gulp
function watch() {
  gulp.watch('src/*.js', gulpJS);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'mainjs'));
