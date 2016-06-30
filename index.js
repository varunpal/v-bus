var EVENTS = {};

module.exports = {
  publish: function (name, parameters) {
    if (EVENTS[name] instanceof Array) {
      EVENTS[name].forEach(function (callback) {
        callback(parameters);
      });
    }
  },

  subscribe: function (name, callback) {
    if (EVENTS[name] instanceof Array) {
      EVENTS[name].push(callback);
    } else {
      EVENTS[name] = [callback];
    }
  },

  flush: function (name) {
    EVENTS[name] = null;
  }
};