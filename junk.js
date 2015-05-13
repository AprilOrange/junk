(function(window, document) {
  var junk = {};
  junk.render = function(tpl, data) {
    var string = document.getElementById(tpl + '-template').innerHTML;
    return nunjucks.renderString(string, data);
  }
  window.junk = junk;
})(window, document)