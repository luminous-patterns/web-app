'use strict';

module.exports = registerBuildTask;

function registerBuildTask (grunt) {

  grunt.registerTask(
    'build-css',
    'Build app css file',
    [
      // 'clean:tmp',
      'copy:otherCss',
      'concat:appCss',
      'concat:vendorCss',
      'concat:eviratecCss',
      'cssmin:eviratecCss',
    ]
  );

}
