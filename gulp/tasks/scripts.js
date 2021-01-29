const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('dev/static/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/static/js/'));
};
