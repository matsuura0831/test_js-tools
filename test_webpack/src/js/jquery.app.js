import additionalCalc from './modules/additional-calc'
import taxCalc from './modules/tax-calc'
import $ from 'jquery'

var p1 = 100;
var p2 = 200;
var tax = 1.08;

var total = additionalCalc(p1, p2);
var price = taxCalc(total, tax);

var txt = '(' + p1 + ' + ' + p2 + ') * ' + tax + ' = ' + price;

console.log(txt);
$('body').html(txt);

