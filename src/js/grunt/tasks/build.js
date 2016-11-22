'use strict';

module.exports = registerBuildTask;

function registerBuildTask (grunt) {

  grunt.registerTask(
    'build',
    'Perform a clean build',
    [
      'clean:tmp',
      'build-js',
      'build-css',
      'clean:build',
      'copy:buildFiles',
    ]
  );

}
