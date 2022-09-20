console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/* a.
  Crear dos variables numéricas y utilizar el operador suma para guardar 
  el valor de la suma de ambos números en una 3er variable.
*/
console.log('-Exercise 1.a:');

var number1 = 5;
var number2 = 7;
var addition = number1 + number2;

console.log(addition);

/* b.
  Crear dos variables de tipo String y concatenarlas guardando el resultado 
  en una 3er variable.
*/
console.log('-Exercise 1.b:');

var word1 = 'Hello';
var word2 = 'world';
var text = word1 + ' ' + word2;

console.log(text);

/* c.
  Crear dos variables de tipo String y sumar el largo de cada variable 
  (cantidad de letras del string) guardando el resultado de la suma en 
  una 3er variable (utilizar length).
*/
console.log('-Exercise 1.c:');

var word3 = 'Radium';
var word4 = 'Rocket';
var lettersCount = word3.length + word4.length;

console.log(lettersCount);