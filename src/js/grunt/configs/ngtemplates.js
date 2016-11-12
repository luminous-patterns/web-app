'use strict';

module.exports = initNgtemplatesConfig;

function initNgtemplatesConfig ($config) {

  $config['ngtemplates'] = {
    EviratecWebApp: {
      cwd: '<%= srcDir %>/ng',
      src: [
        '**/*.html',
      ],
      dest: '<%= tmpBuildDir %>/templates.es6',
    },
  };

}
