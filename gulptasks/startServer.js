'use strict'

//const nodemon = require('gulp-nodemon');

module.exports = function(gulp, plugins) {
  plugins.nodemon({
    script: 'start.js'
  });
}
