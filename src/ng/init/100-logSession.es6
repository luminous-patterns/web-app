app.run(logSession);

logSession.$inject = ['TrackingMessage', 'messageSender', '$window', '$appEnvironment'];
function logSession (  TrackingMessage,   messageSender,   $window,   $appEnvironment) {

  const UNKNOWN = '_UNKNOWN';

  let message = new TrackingMessage();
  let messageMetrics = message.metrics;

  messageMetrics.setData('UserAgent', $window.navigator.userAgent || UNKNOWN);
  messageMetrics.setData('Platform', $window.navigator.platform || UNKNOWN);
  messageMetrics.setData('Vendor', $window.navigator.vendor || UNKNOWN);
  messageMetrics.setData('Timestamp', Date.now());
  messageMetrics.setData('LocalTime', String(new Date()));
  messageMetrics.setData('Hostname', $appEnvironment.hostname);
  messageMetrics.setData('EnvironmentName', $appEnvironment.environmentName);

  messageSender
    .send(message)
    .then(response => {

    })
    .catch(error => {

    });

};
