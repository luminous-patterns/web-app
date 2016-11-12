'use strict';

module.exports = registerBuildTask;

function registerBuildTask (grunt) {

  grunt.registerTask(
    'default',
    [
      'build',
    ]
  );

}
