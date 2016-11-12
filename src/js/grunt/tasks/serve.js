'use strict';

module.exports = registerServeTask;

function registerServeTask (grunt) {

  grunt.registerTask(
    'serve',
    [
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch:dev',
    ]
  );

}
