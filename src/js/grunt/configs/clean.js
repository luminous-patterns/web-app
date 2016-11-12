'use strict';

module.exports = initCleanConfig;

function initCleanConfig ($config) {

  $config['clean'] = {
    tmp: [
      '<%= tmpDir %>',
    ],
    build: [
      '<%= buildDir %>',
    ],
    dist: [
      '<%= distDir %>',
    ],
    server: '.server.tmp',
  };

}
