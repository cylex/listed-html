var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var imageMin = require('gulp-imagemin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

/* Task to compile less */
gulp.task('compile-less', function() {
  gulp.src('assets/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('assets/css/'));
});

/* Task to watch less changes */
gulp.task('watch-less', function() {
  gulp.watch('assets/less/**/*.less' , ['compile-less']);
});

gulp.task('minify-css', function() {
    gulp.src('assets/css/style.css')
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('images', function() {
    gulp.src(['assets/images/**/*'])
    .pipe(imageMin())
    .pipe(gulp.dest('assets/images'));
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "assets/css"
        }
    });
    gulp.watch("assets/less/*.less").on("change", reload);
    gulp.watch("assets/*.html").on("change", reload);
    gulp.watch('assets/images/**/*', ['images']).on("change", reload);
});


/* Task when running `gulp` from terminal */
gulp.task('default', ['minify-css', 'images', 'watch-less']);
