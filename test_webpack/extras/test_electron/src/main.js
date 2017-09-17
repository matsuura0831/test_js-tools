require('./main.css');

const $ = require('jquery');
const fs = require('fs');
const path = require('path');

$(() => {
  $('<h1>').html("Hello World!").appendTo('body');

  var ul = $('<ul>');
  ul.appendTo('body');

  fs.readdir('.', (err, files) => {
    if (err) throw err;

    files.forEach((v) => {
      ul.append($('<li>').html(path.join('.', v)));
    });
  });
});


