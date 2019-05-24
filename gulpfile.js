const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// production
function prod(done) {
  gulp.src('./src/scss/index.scss')
  .pipe(sourcemaps.init())
  .pipe( sass({
    errorLogToConsole: true
  }) )
  .on('error', console.error.bind(console))
  .pipe( autoprefixer({
    browsers: ['last 10 versions'],
    cascade: false
  }) )
  .pipe( rename('style.css') )
  .pipe( sourcemaps.write('./') )
  .pipe( gulp.dest('./dist/css/') );

  gulp.src('./src/index.html')
  .pipe( gulp.dest('./dist/') );

  gulp.src('./src/js/**/*')
  .pipe( gulp.dest('./dist/js/') );

  gulp.src('./src/img/**/*')
  .pipe( gulp.dest('./dist/img/') );

  gulp.src('./src/fonts/**/*')
  .pipe( gulp.dest('./dist/fotns/') );

  gulp.src('./src/plagins/**/*')
  .pipe( gulp.dest('./dist/plagins/') );

  done();
}
// production

// development
function dev(done) {
  gulp.src('./src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe( sass({
    errorLogToConsole: true
  }) )
  .on('error', console.error.bind(console))
  .pipe( rename('style.css') )
  .pipe( sourcemaps.write('./') )
  .pipe( gulp.dest('./src/css/') );

  done();
}
// development

// slick
function slick(done) {
  gulp.src('./src/modules/slick/**/*')
  .pipe( gulp.dest('./dist/plagins/slick') );

  done();
}
// slick

// fontAwesome
function fontAwesome(done) {
  gulp.src('./src/modules/fontAwesome/**/*')
  .pipe( gulp.dest('./dist/plagins/font-awesome') );

  done();
}
// fontAwesome

//jQvery
function jQvery(done) {
  gulp.src('./modules/jQvery/*')
  .pipe( gulp.dest('./src/js/') );

  done();
}
//jQvery

// fonts

// function _name_(done) {
//   gulp.src('./src/modules/fonts/_name_/**/*')
//   .pipe( gulp.dest('./dist/fonts/_name_') );
//
//   done();
// }

function openSans(done) {
  gulp.src('./src/modules/fonts/open_sans/**/*')
  .pipe( gulp.dest('./dist/fonts/open_sans/') );

  done();
}

// fonts

// обновление браузера
function reloadBrowser(done) {
  browserSync.reload();

  done();
}
// обновление браузера

// server
function sync(done) {
  browserSync.init({
    server: {
      baseDir: './src/'
    },
    port: 3000
  });

  done();
}
// server
// обработчик
function watch(done) {
  gulp.watch('./src/scss/**/*', dev);
  gulp.watch('./src/scss/**/*', reloadBrowser);
  gulp.watch('./src/js/**/*', reloadBrowser);
  gulp.watch('./src/img/**/*', reloadBrowser);
  gulp.watch('./src/fonts/**/*', reloadBrowser);
  gulp.watch('./src/plagins/**/*', reloadBrowser);
  gulp.watch('./src/*.html', reloadBrowser);
}
// обработчик
gulp.task(sync);

gulp.task('default', gulp.parallel(watch, sync, dev));

gulp.task(dev);
gulp.task(prod);

gulp.task(slick);
gulp.task(jQvery);
gulp.task(fontAwesome);

gulp.task(openSans);
