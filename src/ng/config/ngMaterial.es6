app.config(appMaterialConfig);

appMaterialConfig.$inject = ['$mdThemingProvider'];
function appMaterialConfig (  $mdThemingProvider) {

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue', {
      'default': '700',
      'hue-2': '800',
    })
    .accentPalette('deep-orange')
    .warnPalette('yellow')
    .dark();

}
