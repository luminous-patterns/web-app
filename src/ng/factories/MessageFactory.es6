app.factory('Message', MessageFactory);

MessageFactory.$inject = ['uuid', 'MessageAuthor', 'MessageContent'];
function MessageFactory (  uuid,   MessageAuthor,   MessageContent) {

  class Message {

    constructor () {

      this.id = uuid.v4();

      this.author = new MessageAuthor();
      this.content = new MessageContent();

    }

    toJSON () {
      return {
        id: this.id,
        topic: 'OTHER',
        author: this.author.toJSON(),
        content: this.content.toJSON(),
      };
    }

  }

  return Message;

}
