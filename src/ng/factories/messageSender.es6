app.factory('messageSender', messageSenderFactory);

messageSenderFactory.$inject = ['MessageTransporter', '$appEnvironment'];
function messageSenderFactory (  MessageTransporter,   $appEnvironment) {

  let messageSender = new MessageTransporter({
    writeVia: $appEnvironment.config.msgSendVia,
    msgIdPrefix: $appEnvironment.config.msgIdPrefix,
  });

  return messageSender;

}
