app.factory('MessageContent', MessageContentFactory);

function MessageContentFactory () {

  class MessageContent {

    constructor () {

      this.body = '';

    }

    toJSON () {
      return {
        body: this.body,
      };
    }

  }

  return MessageContent;

}
