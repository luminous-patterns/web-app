'use strict';

const pkgBanner = `/**
 * Eviratec Web App
 * Copyright © 2016 Callan Peter Milne. All rights reserved.
 * 
 * <%= pkg.name %>@v<%= pkg.version %>
 * Built on <%= grunt.template.today("yyyy-mm-dd") %>
 */\n`;

module.exports = initCssminConfig;

function initCssminConfig ($config) {

  $config['cssmin'] = {};

  $config['cssmin']['options'] = {
    banner: pkgBanner,
  };

  /* cssmin:eviratecCss */
  $config['cssmin']['eviratecCss'] = {
    files: {
      '<%= tmpBuildDir %>/ewa.min.css': ['<%= tmpBuildDir %>/ewa.css'],
    },
  };

}
