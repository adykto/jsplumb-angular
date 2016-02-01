'use strict';

var gulp = require('gulp'),
    CONFIG = require('../src/config/build.json');

gulp.task('assets', function() {
    return gulp.src(CONFIG.assets.src)
        .pipe(gulp.dest(CONFIG.assets.dest));
});
