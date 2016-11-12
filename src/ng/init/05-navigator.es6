app.run(navigatorConfig);

navigatorConfig.$inject = ['$appEnvironment', '$window'];
function navigatorConfig (  $appEnvironment,   $window) {

  $window.document.title = $appEnvironment.config.appTitle;

};
