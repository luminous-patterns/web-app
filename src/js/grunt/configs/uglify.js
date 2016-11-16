'use strict';

const pkgBanner = `/**
 * Eviratec Web App
 * Copyright © 2016 Callan Peter Milne. All rights reserved.
 * 
 * <%= pkg.name %>@v<%= pkg.version %>
 * Built on <%= grunt.template.today("yyyy-mm-dd") %>
 */\n`;

module.exports = initUglifyConfig;

function initUglifyConfig ($config) {

  $config['uglify'] = {};

  $config['uglify']['options'] = {
    mangle: {
      except: [],
    },
    banner: pkgBanner,
  };

  /* uglify:eviratecJs */
  $config['uglify']['eviratecJs'] = {
    files: {
      '<%= tmpBuildDir %>/ewa.js': ['<%= tmpBuildDir %>/ewa.max.js'],
    },
  };

}
