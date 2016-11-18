(function(E,v,i,r,a,t,e,c){"use strict";

  var window;
  var document;
  var webApp;

  window = E;
  document = window.document;

  webApp = new WebApp('EviratecWebApp', document.body);

  function WebApp (name, baseEl) {

    var appScriptEl;
    var webAppRootEl;

    init();

    function init () {
    
      baseEl.setAttribute('ng-app', name);

      appScriptEl = createAppJsScriptEl();
      appScriptEl.$el.addEventListener('load', function () {
        webAppRootEl = createAppRootEl();
        baseEl.appendChild(webAppRootEl.$el);
      });
      baseEl.appendChild(appScriptEl.$el);

      
    }

    function createAppRootEl () {
      return new NewElem('web-app-root');
    }

    function createAppJsScriptEl () {
      return new NewElem('script', {
        id: 'appJs',
        src: 'ewa.min.js',
      });
    }

  }

  function NewElem (type, attrs) {
    
    var attrKeys;
    var hasAttrs;
    var newElem;

    newElem = this;
    type = type || 'div';

    this.type = type;
    this.$el = document.createElement(type);

    attrs = attrs || {};

    attrKeys = Object.keys(attrs);
    hasAttrs = attrKeys.length > 0;

    if (hasAttrs) {
      attrKeys.forEach(setupElemAttr)
    }

    function setupElemAttr (key) {
      var value;
      value = attrs[key];
      newElem.$el.setAttribute(key, value);
    }

  }

})(window);
