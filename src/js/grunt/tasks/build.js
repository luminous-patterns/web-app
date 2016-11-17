'use strict';

module.exports = registerBuildTask;

function registerBuildTask (grunt) {

  grunt.registerTask(
    'build',
    'Perform a clean build',
    [
      'clean:tmp',
      'copy:srcToBuildTmp',
      'copy:otherCss',
      'copy:es6SrcToBuildTmp',
      'ngtemplates:EviratecWebApp',
      'concat:appCss',
      'concat:vendorCss',
      'concat:ngEs6Src',
      'concat:ngEs6',
      'babel',
      'concat:vendorJs',
      'concat:eviratecCss',
      'concat:eviratecJs',
      // 'uglify:eviratecJs',
      'cssmin:appCss',
      'copy:buildFiles',
    ]
  );

}
