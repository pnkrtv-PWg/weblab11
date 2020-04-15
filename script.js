var a = document.querySelector('#var_a');
var b = document.querySelector('#var_b');

var result = document.querySelector('.result');

var button_calc = document.querySelector('.button1');

var text = '';

button_calc.addEventListener('click', function () {
  a = parseFloat(a.value);
  b = parseFloat(b.value);


var s = a*b;
text = 'Площа прямокутника = ' + s + ' квадратних одиниць';
 
  result.innerHTML = text;
}
)
var r = document.querySelector('#var_r');
var h = document.querySelector('#var_h');

var result = document.querySelector('.result2');

var button_calc = document.querySelector('.button2');

var text = '';

button_calc.addEventListener('click', function () {
    r = parseFloat(r.value);
    h = parseFloat(h.value);
  
  
  var v = Math.PI*r*r*h;
  text = "Об'єм циліндра = " + v + ' кубічних одиниць';
   
    result.innerHTML = text;
  }
  )