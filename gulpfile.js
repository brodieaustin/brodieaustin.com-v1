'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cp = require("child_process");


//compile scss to css
function css(){
  return gulp
    .src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(gulp.dest('./_site/assets/css/'))
}

// Jekyll
function jekyll() {
  return cp.spawn("jekyll", ["serve"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", css);
  //gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "./styles/**/*",
    ],
    gulp.series(css)
  );
  //gulp.watch("./assets/img/**/*", images);
}

const build = gulp.parallel(css, jekyll);
const watch = gulp.parallel(watchFiles);

exports.css = css;
exports.jekyll = jekyll;
exports.build = build;
exports.watch = watch;
exports.default = build;
