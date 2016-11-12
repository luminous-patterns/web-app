app.factory('TrackingMetrics', TrackingMetricsFactory);

TrackingMetricsFactory.$inject = [];
function TrackingMetricsFactory () {

  class TrackingMetrics {

    constructor () {

      this._d = {};

    }

    setData (key, value) {
      this._d[key] = value;
      return this;
    }

    toJSON () {

      let obj = {};

      Object.keys(this._d).forEach(key => {
        let value = this._d[key];
        obj[key] = value;
      });

      return obj;

    }

  }

  return TrackingMetrics;

}
