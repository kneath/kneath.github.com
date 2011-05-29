(function() {
  window.after = function(ms, cb) {
    return setTimeout(cb, ms);
  };
  window.every = function(ms, cb) {
    return setInterval(cb, ms);
  };
}).call(this);
