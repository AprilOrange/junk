var list = [{title: 'junk'}, {title: 'food'}, {title: 'chicken'}];

var render = function () {
  var listHTML = junk.render('list', {list: list}); // $('#list-template').html()
  document.querySelector('.output').innerHTML = listHTML;
}
