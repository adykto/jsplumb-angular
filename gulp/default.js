'use strict';

var gulp = require('gulp'),
    CONFIG = require('../src/config/build.json');

gulp.task('default', ['build', 'serve'], function() {
    gulp.watch(CONFIG.assets.watch, ['assets']);
    gulp.watch(CONFIG.scripts.watch, ['scripts']);
});
