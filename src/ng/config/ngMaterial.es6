app.config(appMaterialConfig);

appMaterialConfig.$inject = ['$mdThemingProvider'];
function appMaterialConfig (  $mdThemingProvider) {

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue', {
      'default': '700'
    })
    .accentPalette('deep-orange')
    .warnPalette('yellow')
    .dark();

}
