var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean');

gulp.task('concat', function() {
  gulp.src('./css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./temp/'))
});

gulp.task('minify-css', ['concat'], function() {
  gulp.src('./temp/all.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('clean', function () {
    gulp.src(['./temp'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['minify-css']);