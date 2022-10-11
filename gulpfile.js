import gulp from 'gulp';
import definePrototypeKitGulpTasks from '@ons/prototype-kit/defineGulpTasks.js';

const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/data/*.json')
    .pipe(dest('build/data/'));
}

definePrototypeKitGulpTasks(gulp);
