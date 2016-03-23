'use strict'

gulp = require 'gulp'
source = require 'vinyl-source-stream'
browserify = require 'browserify'
babelify = require 'babelify'
debowerify = require 'debowerify'
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
decodecode = require 'gulp-decodecode'
browserSync = require 'browser-sync'

NAME = 'hashaby'
SRC = './src'
DEST = '.'

gulp.task 'serve', () ->
  gulp.src '.'
    .pipe webserver
      livereload: true,
      directoryListing: false,
      open: true,
  gulp.watch 'src/hashaby.js', ['build']

gulp.task 'browserify', () ->
  return browserify("#{SRC}/#{NAME}.js")
    .transform(babelify)
    .transform(debowerify)
    .bundle()
    .pipe(source("#{NAME}.js"))
    .pipe(gulp.dest("#{DEST}"))

gulp.task 'minify', () ->
  gulp.src("#{DEST}/#{NAME}.js")
    .pipe (uglify {
      preserveComments: 'license',
    })
    .pipe (rename "#{NAME}.min.js")
    .pipe (gulp.dest "#{DEST}")

gulp.task 'deco', () ->
  gulp.src("#{DEST}/#{NAME}.js")
    .pipe (decodecode
      preserveComments: 'license',
      decoArr: ['ねん', 'ころ', 'りよ'],
    )
    .pipe (rename "#{NAME}.deco.js")
    .pipe (gulp.dest "#{DEST}")

# gulp.task 'js', gulp.parallel('browserify')
gulp.task 'js', gulp.series('browserify', gulp.parallel('minify', 'deco'))

gulp.task 'browser-sync' , () ->
  browserSync
    server: {
      baseDir: DEST
    }

  gulp.watch(["#{SRC}/**/*.js"], gulp.series('js', browserSync.reload))
  gulp.watch(["#{DEST}/index.html"], browserSync.reload)

gulp.task('serve', gulp.series('browser-sync'))

gulp.task('build', gulp.parallel('js'))
gulp.task 'default', gulp.series('build', 'serve')
