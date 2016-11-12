app.controller('WebAppRootViewController', webAppRootViewController);

webAppRootViewController.$inject = ['$scope', '$animate', '$appEnvironment'];
function webAppRootViewController (  $scope,   $animate,   $appEnvironment) {

  class WebAppRootViewController {

    constructor () {
      
      this.foo = 'bar';

      this.isLoading = true;

      this.copyright = $appEnvironment.config.copyright;
      
    }

  }

  return new WebAppRootViewController();

}
