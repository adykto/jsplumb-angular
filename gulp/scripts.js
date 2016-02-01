'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    //uglify = require('gulp-uglify'),
    CONFIG = require('../src/config/build.json');

gulp.task('scripts', function() {
    return gulp.src(CONFIG.scripts.src)
        .pipe(browserify(CONFIG.scripts.options))
        .pipe(concat(CONFIG.scripts.build))
        //.pipe(uglify({mangle: false, outSourceMap: true}))
        .pipe(gulp.dest(CONFIG.scripts.dest));
});
