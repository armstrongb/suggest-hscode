import gulp from 'gulp';
import definePrototypeKitGulpTasks from '@ons/prototype-kit/defineGulpTasks.js';


definePrototypeKitGulpTasks(gulp);

// Local gulp tasks for prototype kit
//
gulp.src(['./src/data/*.json'])     // Source data files
  .pipe(gulp.dest('./build/data/')) // Output for build