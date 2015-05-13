(function(window, document) {
  var junk = {};
  junk.renderString = function(tpl, data) {
    var string = document.getElementById(tpl + '-template').innerHTML;
    return nunjucks.renderString(string, data);
  }
  junk.render = function(tpl, data) {
    return nunjucks.render(tpl + '.html', data);
  }
  window.junk = junk;
})(window, document)