var gulp        = require('gulp');
var minifyCSS   = require('gulp-minify-css');
var cssbeautify = require('gulp-cssbeautify');
  
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(minifyCSS({
      keepBreaks:true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('prettify-css', function() {
    return gulp.src('./dist/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'));;
});