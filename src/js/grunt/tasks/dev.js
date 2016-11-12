'use strict';

module.exports = registerDevTask;

function registerDevTask (grunt) {

  grunt.registerTask(
    'dev',
    'Run dev server and watch for changes',
    [
      'clean:server',
      'build',
      'connect:livereload',
      'watch:dev',
    ]
  );

}
