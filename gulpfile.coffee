'use strict'

gulp = require 'gulp'
runSequence = require 'run-sequence'
babel = require 'gulp-babel'
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
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

gulp.task 'babel', () ->
  return gulp.src('src/hashaby.js')
    .pipe plumber(
      errorHandler: notify.onError("Error: <%= error.message %>"),
    )
    .pipe do babel
    .pipe (gulp.dest 'dist')

gulp.task 'minify', () ->
  gulp.src('dist/hashaby.js')
    .pipe (uglify {})
    .pipe (rename 'hashaby.min.js')
    .pipe (gulp.dest 'dist')

gulp.task 'build', () ->
  runSequence 'babel', 'minify'

gulp.task 'watch', () ->
  gulp.watch('src/hashaby.js', ['build'])

gulp.task 'default', ['build']
