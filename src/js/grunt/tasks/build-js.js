'use strict';

module.exports = registerBuildTask;

function registerBuildTask (grunt) {

  grunt.registerTask(
    'build-js',
    'Build app js file',
    [
      // 'clean:tmp',
      'copy:srcToBuildTmp',
      'copy:es6SrcToBuildTmp',
      'ngtemplates:EviratecWebApp',
      'concat:ngEs6Src',
      'concat:ngEs6',
      'babel',
      'concat:vendorJs',
      'concat:eviratecJs',
      'uglify:eviratecJs',
    ]
  );

}
