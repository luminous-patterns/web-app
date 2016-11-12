app.factory('MessageTransporter', MessageTransporterFactory);

MessageTransporterFactory.$inject = ['$http', '$logger'];
function MessageTransporterFactory (  $http,   $logger) {

  const DEFAULT_READ_VIA = 'http://localhost/';
  const DEFAULT_WRITE_VIA = 'http://localhost/';
  const DEFAULT_MSG_ID_PREFIX = '';

  class MessageTransporter extends EventEmitter {

    constructor (config) {

      super();

      configure(this, config);

    }

    get writeViaUrl () {
      return [this.writeVia, this.msgIdPrefix].join('');
    }

    send (message) {
      $logger.log('sending', message);
      return httpPut(message, this.writeMsgUrl(message));
    }

    writeMsgUrl (message) {
      return [this.writeViaUrl, message.id, '/msg.evmsg'].join('');
    }

  }

  function httpPut (message, url) {
    
    return new Promise((resolve, reject) => {

      let attrs = {
        method: 'PUT',
        url: url,
        headers: {
          'x-amz-acl': 'bucket-owner-full-control',
          'Content-Type': 'application/json',

        },
        data: JSON.stringify(message),
      };

      $http(attrs).then(resolve, reject);

    });

  }

  function configure (messageTransporter, config) {

    let attrs = {};

    config = config || {};

    attrs.readVia = config.readVia || DEFAULT_READ_VIA;
    attrs.writeVia = config.writeVia || DEFAULT_WRITE_VIA;
    attrs.msgIdPrefix = config.msgIdPrefix || DEFAULT_MSG_ID_PREFIX;

    Object.keys(attrs).forEach(key => {
      messageTransporter[key] = attrs[key];
    });

  }

  return MessageTransporter;

}
