app.directive('contactForm', contactFormDirective);

contactFormDirective.$inject = [];
function contactFormDirective () {

  return {
    restrict: 'A',
    controller: 'ContactFormDirectiveController as $form',
    templateUrl: 'html/directives/contactForm.html',
    link: {
      pre: function preLink (scope, iElement, iAttrs, controller) {
        iElement.addClass('contact-form contact-form-wrapper');
      },
      post: function postLink (scope, iElement, iAttrs, controller) {

      },
    },
  };

}
