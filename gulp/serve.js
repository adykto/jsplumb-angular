'use strict';

var gulp = require('gulp'),
    serve = require('gulp-serve'),
    CONFIG = require('../src/config/build.json');

gulp.task('serve', serve(CONFIG.serve));
