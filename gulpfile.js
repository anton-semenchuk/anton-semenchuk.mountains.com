// Объявляем наши плагины
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('scss/main.scss')
  .pipe(plumber())
  .pipe(sass({errLogToConsole: true}))
  .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))

  .pipe(gulp.dest('project/css'));
});

gulp.task('default', function() {
  gulp.run('sass');
  gulp.watch('scss/**', function(event) {
    gulp.run('sass');
  })
});

