'use strict';

module.exports = initWatchConfig;

function initWatchConfig ($config) {

  $config['watch'] = {
    dev: {
      files: [
        '<%= staticDir %>/**/*',
        '<%= srcDir %>/**/*',
      ],
      tasks: [
        'build',
      ],
      options: {
        spawn: true,
        livereload: {
          host: '<%= pkg.config.localDev.hostname %>',
          port: '<%= pkg.config.localDev.liveReloadPort %>',
        },
      },
    },
    livereload: {
      files: [
        '<%= buildDir %>/**/*.html',
        '<%= buildDir %>/**/*.css',
        '<%= buildDir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
      ],
      options: {
        livereload: '<%= pkg.config.localDev.liveReloadPort %>',
      },
    },
  };

}
