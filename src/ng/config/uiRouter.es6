app.config(uiRouter);

uiRouter.$inject = ['$locationProvider', 'HTML5_PUSH_STATE_ON'];
function uiRouter (  $locationProvider,   HTML5_PUSH_STATE_ON) {

  $locationProvider.html5Mode(HTML5_PUSH_STATE_ON);

}
