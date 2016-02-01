'use strict';

var gulp = require('gulp');

require('fs').readdirSync('./gulp').forEach(function(task) {
    require('./gulp/' + task);
});
