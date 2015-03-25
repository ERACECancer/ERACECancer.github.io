var gulp        = require('gulp');
var minifyCSS   = require('gulp-minify-css');
var cssbeautify = require('gulp-cssbeautify');
var minifyHTML  = require('gulp-minify-html');
var prettify    = require('gulp-prettify');

// Compress for prod  
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
});

gulp.task('minify-html', function() {
  return gulp.src('./index.html')
    .pipe(minifyHTML({
      conditionals: true,
      spare: true
    }))
    .pipe(gulp.dest('./'));
});

// Decompress
gulp.task('prettify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./css/'));;
});

gulp.task('prettify-html', function() {
  gulp.src('index.html')
    .pipe(prettify({
      indent_size: 2
    }))
    .pipe(gulp.dest('./'))
});
