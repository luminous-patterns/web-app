app.config(appStates);

appStates.$inject = ['$stateProvider'];
function appStates (  $stateProvider) {

  $stateProvider.state('index', {
    url: '/',
    template: '<index-state></index-state>',
  });

  $stateProvider.state('appdev', {
    url: '/application-development',
    template: '<appdev-state></appdev-state>',
  });

  $stateProvider.state('contact', {
    url: '/contact-us',
    template: '<contact-state></contact-state>',
  });

}
