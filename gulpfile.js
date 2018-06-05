const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('webpack');
const config = require('./webpack.config.js');

gulp.task('scripts', (callback) => {
  webpack(config, (err, stats) => {
    if (err) {
      console.log(err.toString()); // eslint-disable-line no-console
    }
    console.log(stats.toString()); // eslint-disable-line no-console
    callback();
  });
});

gulp.task('watch', () => {
  watch('./src', () => {
    gulp.start('scripts');
  });
});
