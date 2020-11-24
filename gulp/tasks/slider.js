const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

module.exports = function slider() {
    return gulp.src(
        ['node_modules/jquery/dist/jquery.js',
        'node_modules/slick/slick.min.js',
        'dist/static/js/slider.js',]
    )
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/static/js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/static/js'))
        .pipe(browserSync.reload({
            stream: true,
            once: true
        }));
});
