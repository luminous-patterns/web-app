'use strict';

module.exports = initBabelConfig;

function initBabelConfig ($config) {

  $config['babel'] = {
    options: {
      sourceMap: true,
      presets: [
        'es2015',
      ],
    },
    build: {
      files: [{
        expand: true,
        cwd: '<%= tmpBuildDir %>',
        src: [
          'ng.es6',
        ],
        dest: '<%= tmpBuildDir %>/',
        ext: '.max.js',
      }],
    },
  };

}
