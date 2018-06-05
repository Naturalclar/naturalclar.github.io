const gulp = require('gulp');
const watch = require('gulp-watch');
const webpack = require('webpack');
const config = require('./webpack.config.js');

gulp.task('scripts', (callback) => {
  webpack(config, (err, stats) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', () => {
  watch('./src', () => {
    gulp.start('scripts');
  });
});
