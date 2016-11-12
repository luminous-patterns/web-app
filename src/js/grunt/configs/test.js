'use strict';

const Jasmine = require('jasmine');
const JasmineSpecReporter = require('jasmine-spec-reporter');

module.exports = initTestConfig;

function initTestConfig ($config) {
  
  let jasmineSpecReporter = new JasmineSpecReporter({
    displayStacktrace: 'summary',
  });

  $config['test'] = {
    options: {
      configFile: 'jasmine.json',
    },
  };

}
