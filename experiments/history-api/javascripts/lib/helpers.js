(function() {
  window.after = function(ms, cb) {
    return setTimeout(cb, ms);
  };
  window.every = function(ms, cb) {
    return setInterval(cb, ms);
  };
  // Read a page's GET URL variables and return them as an associative array.
window.getUrlVars = function()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};
}).call(this);
