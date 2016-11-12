'use strict';

const path = require('path');

const mainModuleDir = path.resolve('.');
const VendorLib = require([mainModuleDir, 'src', 'js', 'VendorLib'].join(path.sep));
const PKG = require([mainModuleDir, 'package.json'].join(path.sep));

const USE_MINIFED_VENDOR_LIB_SOURCES = PKG.config.minifyVendorLibs;
const FE_VENDOR_LIBS = PKG.config.vendorLibs;

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
  };

  /* concat:ngJsSrc */
  $config['concat']['ngJsSrc'] = {
    files: {
      '<%= tmpBuildDir %>/srcFiles.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/0/**/*.es6',
      ],
    },
    options: {
      banner: '(function (angular, app, window) {\n\n',
      footer: '})(angular, app, window);\n',
      separator: '})(angular, app, window);\n\n(function (angular, app, window) {\n\n',
    },
  };

  /* concat:ngJs */
  $config['concat']['ngJs'] = {
    files: {
      '<%= tmpBuildDir %>/ng.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/module.es6',
        '<%= tmpBuildDir %>/srcFiles.es6',
        '<%= tmpBuildDir %>/templates.es6',
      ],
    },
    options: {
      // banner: '(function (angular, window) {\n\n',
      // footer: '})(angular, window);\n',
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
      '<%= tmpBuildDir %>/app.css',
      '<%= tmpBuildDir %>/vendor.css',
    ],
    dest: '<%= tmpBuildDir %>/ewa.css',
  };
  
  /* concat:eviratecJs */
  $config['concat']['eviratecJs'] = {
    src: [
      '<%= tmpBuildDir %>/vendor.js',
      '<%= tmpBuildDir %>/ng.js',
    ],
    dest: '<%= tmpBuildDir %>/ewa.js',
  };

}
