var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin'), 
    pngquant = require('imagemin-pngquant'),
    clean = require('gulp-clean');


gulp.task('imagemin', function () {
  gulp.src('./assets/img*.jpg')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function () {
    gulp.src('./dist/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
    gulp.src(['./dist/*.css', '!./dist/main.min.css'], {read: false})
        .pipe(clean());
});

gulp.task('watch', function() {
    // gulp.watch('scripts/*.js', ['lint', 'scripts']);
    // gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['index', 'templates', 'minify', 'imagemin', 'clean']);