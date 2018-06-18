'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
  
gulp.task('sass', function () {
  return gulp.src('public/stylesheet/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheet/css'));
});
 
// Tâche "build"
gulp.task('build', ['sass']);

// Tâche "watch" = je surveille *less
gulp.task('watch', function () {
    gulp.watch('public/stylesheet/sass/style.scss', ['build']);
});

