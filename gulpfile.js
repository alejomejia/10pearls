const gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename');

/* Task to do */

gulp.task('sass', () => {
  /* Origin folders */
  return gulp.src('./src/sass/*.sass')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('main.css'))
    /* Output folder */
    .pipe(gulp.dest('./dist'));
})

gulp.task('default', () => {
  /* Watch files for changes to compile */
  gulp.watch('./src/**/*.sass', gulp.series('sass'));
});