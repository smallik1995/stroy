const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// production
function prod(done) {
  gulp.src('./src/scss/index.scss')
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

  gulp.src('./src/*.html')
  .pipe( gulp.dest('./dist/') );

  gulp.src('./src/js/**/*')
  .pipe( gulp.dest('./dist/js/') );

  gulp.src('./src/img/**/*')
  .pipe( gulp.dest('./dist/img/') );

  gulp.src('./src/fonts/**/*')
  .pipe( gulp.dest('./dist/fonts/') );

  gulp.src('./src/plagins/**/*')
  .pipe( gulp.dest('./dist/plagins/') );

  done();
}
// production

// development
function dev(done) {
  gulp.src('./src/scss/*.scss')
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
  gulp.src('./modules/slick/**/*')
  .pipe( gulp.dest('./src/plagins/slick/') );

  done();
}
// slick

// fontAwesome
function fontAwesome(done) {
  gulp.src('./modules/font-awesome/**/*')
  .pipe( gulp.dest('./src/plagins/font-awesome/') );

  done();
}
// fontAwesome

//jQvery
function jQvery(done) {
  gulp.src('./modules/jqvery/*')
  .pipe( gulp.dest('./src/js/') );

  done();
}
//jQvery

// fonts

function openSans(done) {
  gulp.src('./modules/fonts/open_sans/**/*')
  .pipe( gulp.dest('./src/fonts/open_sans/') );

  done();
}

function montserrat(done) {
  gulp.src('./modules/fonts/montserrat/**/*')
  .pipe( gulp.dest('./src/fonts/montserrat/') );

  done();
}

function recoleta(done) {
  gulp.src('./modules/fonts/recoleta/**/*')
  .pipe( gulp.dest('./src/fonts/recoleta/') );

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
gulp.task(montserrat);
gulp.task(recoleta);
