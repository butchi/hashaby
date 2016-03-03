'use strict'

gulp = require 'gulp'
runSequence = require 'run-sequence'
source = require 'vinyl-source-stream';
browserify = require 'browserify';
babelify = require 'babelify';
debowerify = require 'debowerify';
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
decodecode = require 'gulp-decodecode'
plumber = require 'gulp-plumber'
notify = require 'gulp-notify'
webserver = require 'gulp-webserver'

gulp.task 'serve', () ->
  gulp.src '.'
    .pipe webserver
      livereload: true,
      directoryListing: false,
      open: true,
  gulp.watch 'src/hashaby.js', ['build']

gulp.task 'js', () ->
  return browserify('src/hashaby.js')
    .transform(babelify)
    .transform(debowerify)
    .bundle()
    .pipe(source('hashaby.js'))
    .pipe(gulp.dest('dist'));

gulp.task 'minify', () ->
  gulp.src('dist/hashaby.js')
    .pipe (uglify {})
    .pipe (rename 'hashaby.min.js')
    .pipe (gulp.dest 'dist')

gulp.task 'deco', () ->
  gulp.src('dist/hashaby.js')
    .pipe (decodecode
      decoArr: ['ねん', 'ころ', 'りよ']
    )
    .pipe (rename 'hashaby.deco.js')
    .pipe (gulp.dest 'dist')

gulp.task 'build', () ->
  runSequence 'js', 'minify', 'deco'

gulp.task 'watch', () ->
  gulp.watch('src/hashaby.js', ['build'])

gulp.task 'default', ['build']
