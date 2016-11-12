app.factory('$logger', loggerFactory);

loggerFactory.$inject = ['Logger', '$appEnvironment'];
function loggerFactory (  Logger,   $appEnvironment) {

  let environmentName = $appEnvironment.environmentName;
  let debugEnabled = false;

  let isProductionEnv = /^production\-/.test(environmentName);
  let isNotProductionEnv = !isProductionEnv;

  if (isNotProductionEnv) {
    debugEnabled = true;
  }

  let logger = new Logger();

  logger.writeToConsole = debugEnabled;

  return logger;

}
