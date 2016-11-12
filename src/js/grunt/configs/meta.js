'use strict';

const metaBanner = `
/**\n
 * <%= pkgName %>\n
 * Copyright © 2016 <% pkg.author %>\n
 * @version v<%= pkg.version %><%= buildTag %>\n
 * @link <%= pkg.homepage %>\n
 */\n
`;

module.exports = initMetaConfig;

function initMetaConfig ($config) {

  $config['meta'] = {
    banner: metaBanner,
  };

}
