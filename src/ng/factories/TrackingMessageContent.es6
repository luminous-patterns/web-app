app.factory('TrackingMessageContent', TrackingMessageContentFactory);

TrackingMessageContentFactory.$inject = ['MessageContent'];
function TrackingMessageContentFactory (  MessageContent) {

  class TrackingMessageContent extends MessageContent {

    constructor () {

      super();



    }

    toJSON () {
      return {
        body: this.body,
      };
    }

  }

  return TrackingMessageContent;

}
