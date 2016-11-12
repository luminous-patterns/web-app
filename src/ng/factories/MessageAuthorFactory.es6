app.factory('MessageAuthor', MessageAuthorFactory);

function MessageAuthorFactory () {

  class MessageAuthor {

    constructor () {

      this.displayName = '';
      this.emailAddress = '';
      this.phoneNumber = '';

    }

    toJSON () {
      return {
        displayName: this.displayName,
        emailAddress: this.emailAddress || '_UNKNOWN',
        phoneNumber: this.phoneNumber || '_UNKNOWN',
      };
    }

  }

  return MessageAuthor;

}
