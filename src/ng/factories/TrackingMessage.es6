app.factory('TrackingMessage', TrackingMessageFactory);

TrackingMessageFactory.$inject = ['Message', 'TrackingMetrics', 'TrackingMessageContent'];
function TrackingMessageFactory (  Message,   TrackingMetrics,   TrackingMessageContent) {

  class TrackingMessage extends Message {

    constructor () {

      super();

      this.metrics = new TrackingMetrics();
      this.content = new TrackingMessageContent();

    }

    toJSON () {
      return {
        id: this.id,
        topic: 'TRACKING',
        metrics: this.metrics.toJSON(),
        content: this.content.toJSON(),
      };
    }

  }

  return TrackingMessage;

}
