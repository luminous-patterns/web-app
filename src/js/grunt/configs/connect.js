'use strict';

const util = require('util');
const modRewrite = require('connect-modrewrite');

module.exports = initBabelConfig;

function initBabelConfig ($config) {

  $config['connect'] = {
    options: {
      port: '<%= pkg.config.localDev.port %>',
      hostname: '<%= pkg.config.localDev.hostname %>',
    },
    livereload: {
      options: {
        open: true,
        base: 'build',
        middleware: function (connect, options, middlewares) {
          
          let noRewriteExts = ['html','jpg','js','svg','css','png','eot','ttf','woff','woff2','ico','txt'];
          let noRewriteRegExp = util.format('!\\.%s$', noRewriteExts.join('|\\.'));

          middlewares.unshift(modRewrite([
            util.format('%s /index.html [L]', noRewriteRegExp),
          ]));

          return middlewares;
          
        },
      },
    },
  };

}
