app.factory('Logger', LoggerFactory);

LoggerFactory.$inject = [];
function LoggerFactory () {

  class Logger {

    constructor () {

      this.writeToConsole = false;

    }

    log () {

      if (this.writeToConsole) {
        consoleLog(...arguments);
      }

      return this;

    }

  }

  function consoleLog () {
    console.log(...arguments);
  }

  return Logger;

}
