app.directive('webAppRoot', webAppRootDirective);

webAppRootDirective.$inject = [];
function webAppRootDirective () {

  return {
    restrict: 'E',
    controller: 'WebAppRootViewController as $webAppRoot',
    templateUrl: 'html/directives/webAppRoot.html',
    link: {
      pre: function preLink (scope, iElement, iAttrs, controller) {

        
        
      },
      post: function postLink (scope, iElement, iAttrs, controller) {

      },
    },
  };

}
