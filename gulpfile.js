var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('default', shell.task([
  './node_modules/.bin/protractor conf.js'
]));