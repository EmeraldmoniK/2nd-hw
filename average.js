var a = +prompt('Введите 1 число')
var b = +prompt('Введите 2 число')
var c = +prompt('Введите 3 число')

alert(a > b && a < c && !isNaN(a) && !isNaN(b) && !isNaN(c) || a > c && a < b && !isNaN(a) && !isNaN(b) && !isNaN(c) ? 'Ваше среднее число ' + a : b > a && b < c && !isNaN(a) && !isNaN(b) && !isNaN(c) || b > c && b < a && !isNaN(a) && !isNaN(b) && !isNaN(c)? 'Ваше среднее число ' + b : c > a && c < b && !isNaN(a) && !isNaN(b) && !isNaN(c) || c > b && c < a && !isNaN(a) && !isNaN(b) && !isNaN(c)?  'Ваше среднее число ' + c : 'Что-то пошло не так')



















