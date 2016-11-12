app.factory('messageReceiver', messageReceiverFactory);

messageReceiverFactory.$inject = ['MessageTransporter', '$appEnvironment'];
function messageReceiverFactory (  MessageTransporter,   $appEnvironment) {

  let messageReceiver = new MessageTransporter({
    readVia: $appEnvironment.config.msgRecieveVia,
    msgIdPrefix: $appEnvironment.config.msgIdPrefix,
  });

  return messageReceiver;

}
