var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

gulp.task('default', function () {
  return gulp.src('source/css/*.css')
    .pipe(concatCss('main.css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/css/'))
    .pipe(notify("== App was bult! =="));
});

gulp.task('watch', function() {
    gulp.watch('source/css/*.css', ['default'])
});
