var list = [{title: 'junk'}, {title: 'food'}, {title: 'chicken'}];

var renderString = function () {
  var listHTML = junk.renderString('list', {list: list}); // $('#list-template').html()
  document.querySelector('.output').innerHTML = listHTML;
}

var renderFile = function () {
  var listHTML = junk.render('test/page', {title: 'peak', slogan: 'to be no.1', list: list}); // $('#list-template').html()
  document.querySelector('.output').innerHTML = listHTML;
}

