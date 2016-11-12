app.config(appEnv);

appEnv.$inject = ['$appEnvironmentProvider'];
function appEnv (  $appEnvironmentProvider) {

  $appEnvironmentProvider
  
  /**
   * Default environment vars
   */

  .setDefaults({
    appTitle: 'Eviratec Web Application',
    contactPhone: '+61 450 297 391',
    msgSendVia: 'https://s3-ap-southeast-2.amazonaws.com/msg.to.eviratec.net/',
    msgRecieveVia: 'https://s3-ap-southeast-2.amazonaws.com/msg.from.eviratec.net/',
    msgIdPrefix: 'dev/local/default/',
    copyright: 'Copyright © 2016 Callan Peter Milne.  All rights reserved.',
  })
  
  /**
   * Local dev environment
   */

  .addEnvironment('localdev', ['127.0.0.1', 'localhost', /\.local$/i], {
    appTitle: '127/ Eviratec Software :: Eviratec.local',
    contactEmail: 'info@eviratec.localhost',
    msgIdPrefix: 'dev/local/callan.milne/',
  })
  
  /**
   * Production (www.eviratec.co) environment
   */

  .addEnvironment('production-co', /^(|www\.)eviratec.co$/, {
    appTitle: 'Eviratec Software :: Eviratec.co',
    contactEmail: 'info@eviratec.co',
    msgIdPrefix: 'prod/www.eviratec.co/',
    copyright: 'Copyright © 2016 Eviratec.co.  All rights reserved.',
  })
  
  /**
   * Production (www.eviratec.com) environment
   */

  .addEnvironment('production-com', /^(|www\.)eviratec.com$/, {
    appTitle: 'Eviratec Software :: Eviratec.com',
    contactEmail: 'info@eviratec.co',
    msgIdPrefix: 'prod/www.eviratec.com/',
    copyright: 'Copyright © 2016 Eviratec.com.  All rights reserved.',
  })
  
  /**
   * Production (www.eviratec.com.au) environment
   */

  .addEnvironment('production-com-au', /^(|www\.)eviratec.com.au$/, {
    appTitle: 'Eviratec Software :: Eviratec.com.au',
    contactEmail: 'info@eviratec.com.au',
    contactPhone: '0450 297 391',
    msgIdPrefix: 'prod/www.eviratec.com.au/',
    copyright: 'Copyright © 2016 Eviratec.com.au.  All rights reserved.',
  })
  
  .defaultEnvironmentName('local');

}
