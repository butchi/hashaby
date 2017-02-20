'use strict';

// import
import gulp from 'gulp';
import babel from 'gulp-babel';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import babelify from 'babelify';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import decodecode from 'gulp-decodecode';
import browserSync from 'browser-sync';
import watch from 'gulp-watch';


// const
const APP = 'hashaby';
const SRC = './src';
const HTDOCS = './docs';
const DEST = './dist';

// js-module
gulp.task('babel', () => {
  return gulp.src(`${SRC}/js/${APP}-core.js`)
    .pipe(babel())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('.'))
  ;
});

gulp.task('js-module', gulp.series('babel'));


// js-lib
gulp.task('browserify', () => {
  return browserify(`${SRC}/js/${APP}.js`)
    .transform(babelify)
    .bundle()
    .pipe(source(`${APP}.js`))
    .pipe(gulp.dest(`${DEST}`))
  ;
});

gulp.task('minify', () => {
  return gulp.src(`${DEST}/${APP}.js`)
    .pipe(uglify({
      preserveComments: 'license',
    }))
    .pipe(rename(`${APP}.min.js`))
    .pipe(gulp.dest(`${DEST}`))
  ;
});

gulp.task('deco', () => {
  return gulp.src(`${DEST}/${APP}.js`)
    .pipe(decodecode({
      preserveComments: 'license',
      decoArr: ['ねん', 'ころ', 'りよ'],
    }))
    .pipe(rename(`${APP}.deco.js`))
    .pipe(gulp.dest(`${DEST}`))
    .pipe(gulp.dest(`${HTDOCS}/js/lib`))
  ;
});

gulp.task('js-lib', gulp.series('browserify', gulp.parallel('minify', 'deco')));


gulp.task('browser-sync' , () => {
  browserSync({
    server: {
      baseDir: HTDOCS,
    },
    startPath: '/',
    ghostMode: false,
  });

  watch([`${SRC}/**/*.js`], gulp.series('js', browserSync.reload));
});

gulp.task('serve', gulp.series('browser-sync'));


gulp.task('js', gulp.series('js-module', 'js-lib'));
gulp.task('build', gulp.series('js'));
gulp.task('default', gulp.series('build', 'serve'));
