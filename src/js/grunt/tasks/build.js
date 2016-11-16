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
      'concat:vendorCss',
      'concat:vendorJs',
      'concat:appCss',
      'concat:ngJsSrc',
      'concat:ngJs',
      'concat:eviratecCss',
      'concat:eviratecJs',
      'babel',
      // 'uglify:eviratecJs',
      'cssmin:appCss',
      'copy:buildFiles',
      'clean:tmp',
    ]
  );

}
