'use strict';

const path = require('path');

const mainModuleDir = path.resolve('.');
const VendorLib = require([mainModuleDir, 'src', 'js', 'VendorLib'].join(path.sep));
const PKG = require([mainModuleDir, 'package.json'].join(path.sep));

const USE_MINIFED_VENDOR_LIB_SOURCES = PKG.config.minifyVendorLibs;
const FE_VENDOR_LIBS = PKG.config.vendorLibs;

const pkgBanner = `/**
 * Eviratec Web App
 * Copyright © 2016 Callan Peter Milne. All rights reserved.
 * 
 * <%= pkg.name %>@v<%= pkg.version %>
 * Built on <%= grunt.template.today("yyyy-mm-dd") %>
 */"use strict";
(function(){"use strict";\n`;

module.exports = initConcatConfig;

function initConcatConfig ($config) {

  FE_VENDOR_LIBS.forEach((v, i, a) => {
    a[i] = new VendorLib(v, USE_MINIFED_VENDOR_LIB_SOURCES);
  });

  $config['concat'] = {};

  $config['concat']['options'] = {
    stripBanners: true,
  };

  /* concat:vendorCss */
  $config['concat']['vendorCss'] = {
    src: VendorLib.cssGlobsForAll(FE_VENDOR_LIBS),
    dest: '<%= tmpBuildDir %>/vendor.css',
  };

  /* concat:vendorJs */
  $config['concat']['vendorJs'] = {
    src: VendorLib.jsGlobsForAll(FE_VENDOR_LIBS),
    dest: '<%= tmpBuildDir %>/vendor.js',
    options: {
      // banner: '(function (window) {\n\n',
      // footer: '})(window);\n',
      // separator: '})(window);\n\n(function (window) {\n\n',
    },
  };

  /* concat:ngEs6Src */
  $config['concat']['ngEs6Src'] = {
    files: {
      '<%= tmpBuildDir %>/srcFiles.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/0/**/*.es6',
      ],
    },
  };

  /* concat:ngEs6 */
  $config['concat']['ngEs6'] = {
    files: {
      '<%= tmpBuildDir %>/ng.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/module.es6',
        '<%= tmpBuildDir %>/srcFiles.es6',
        '<%= tmpBuildDir %>/templates.es6',
      ],
    },
    options: {
      // banner: '(function (angular) {\n\n',
      // footer: '})(angular);\n',
    },
  };
  
  /* concat:appCss */
  $config['concat']['appCss'] = {
    src: [
      '<%= srcDir %>/css/**/*.css',
    ],
    dest: '<%= tmpBuildDir %>/app.max.css',
  };
  
  /* concat:eviratecCss */
  $config['concat']['eviratecCss'] = {
    src: [
      '<%= tmpBuildDir %>/vendor.css',
      '<%= tmpBuildDir %>/app.css',
    ],
    dest: '<%= tmpBuildDir %>/ewa.css',
  };
  
  /* concat:eviratecJs */
  $config['concat']['eviratecJs'] = {
    options: {
      banner: pkgBanner,
      footer: '})();\n\n\n',
      // separator: '})(angular);\n',
    },
    src: [
      '<%= tmpBuildDir %>/vendor.js',
      '<%= tmpBuildDir %>/ng.js',
    ],
    dest: '<%= tmpBuildDir %>/ewa.js',
  };

}
