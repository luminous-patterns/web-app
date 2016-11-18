app.controller('WebAppRootViewController', webAppRootViewController);

webAppRootViewController.$inject = ['$scope', '$animate', '$appEnvironment', '$window'];
function webAppRootViewController (  $scope,   $animate,   $appEnvironment,   $window) {

  class WebAppRootViewController {

    constructor () {
      
      this.foo = 'bar';

      this.isLoading = true;

      this.copyright = $appEnvironment.config.copyright;
      
    }

    goto (location) {
      $window.location.pathname = location;
    }

  }

  return new WebAppRootViewController();

}
