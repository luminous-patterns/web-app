app.factory('ContactMessage', ContactMessageFactory);

ContactMessageFactory.$inject = ['Message'];
function ContactMessageFactory (  Message) {

  class ContactMessage extends Message {

    constructor () {

      super();

    }

    toJSON () {
      return {
        id: this.id,
        topic: 'CUSTOMER_CONTACT',
        author: this.author.toJSON(),
        content: this.content.toJSON(),
      };
    }

  }

  return ContactMessage;

}
