'use strict';

module.exports = registerUnitTask;

function registerUnitTask (grunt) {

  grunt.registerTask(
    'unit',
    'Build and test',
    [
      'build',
    ]
  );

}
