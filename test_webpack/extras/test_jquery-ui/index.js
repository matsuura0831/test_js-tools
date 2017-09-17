require('./main.css');
require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/menu.css');
require('jquery-ui/themes/base/slider.css');
require('jquery-ui/themes/base/theme.css');
var $ = require('jquery');

var slider = require('jquery-ui/ui/widgets/slider');

$(() => {
  var elm = $('<div>').attr('id', 'slider').css({ width: '100px'});
  elm.appendTo('body');

  elm.slider({
    value:5,
    min:0,
    max:10,
    step:1,
    range:"min"
  });
});
