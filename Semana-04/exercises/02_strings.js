console.log('--EXERCISE 2: STRINGS');

/* a.
  Crear una variable de tipo string con al menos 10 caracteres y 
  convertir todo el texto en mayúscula (utilizar toUpperCase).
*/
console.log('-Exercise 2.a:');

var text2a1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var text2a2 = text2a1.toUpperCase(text2a1);

console.log('Texto a mayúsculas: ' + text2a2);

/* b.
  Crear una variable de tipo string con al menos 10 caracteres y 
  generar un nuevo string con los primeros 5 caracteres guardando el 
  resultado en una nueva variable (utilizar substring).
*/
console.log('-Exercise 2.b:');

var text2b = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var subText2b = text2b.substring(0, 5);

console.log('Text: ' + text2b + ' Subtext: ' + subText2b); 

/* c.
  Crear una variable de tipo string con al menos 10 caracteres y generar 
  un nuevo string con los últimos 3 caracteres guardando el resultado en 
  una nueva variable (utilizar substring).
*/
console.log('-Exercise 2.c:');

var text2c = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var subText2c = text2c.substring(text2c.length - 3);

console.log('Text: ' + text2c + ' Subtext: ' + subText2c); 

/* d.
  Crear una variable de tipo string con al menos 10 caracteres y generar 
  un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
  Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
  toLowerCase y el operador +).
*/
console.log('-Exercise 2.d:');

var text2d = 'lorem ipsum dolor sit amet consectetur adipisicing elit.';
var upperFirst = text2d.substring(0,1).toUpperCase();
var lowerText = text2d.slice(1).toLowerCase();

console.log('Text: ' + text2d + ' Modified: ' + upperFirst + lowerText); 

/* e.
  Crear una variable de tipo string con al menos 10 caracteres y algún 
  espacio en blanco. Encontrar la posición del primer espacio en blanco y 
  guardarla en una variable (utilizar indexOf).
*/
console.log('-Exercise 2.e:');

var text2e = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var blankSpace = text2e.indexOf(' ');

console.log('Text: ' + text2e);
console.log('Blank space position: ' + (blankSpace + 1));

/* f.
  Crear una variable de tipo string con al menos 2 palabras largas 
  (10 caracteres y algún espacio entre medio). Utilizar los métodos de los 
  ejercicios anteriores para generar un nuevo string que tenga la primera 
  letra de ambas palabras en mayúscula y las demás letras en minúscula 
  (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('-Exercise 2.f:');

var text2e = 'conSECtetuR aDIPisicINg';
var upperFirst2e = text2e.substring(0, 1).toUpperCase();
var lowerFirst2e = text2e.substring(1, text2e.indexOf(' ')).toLowerCase();
var upperSecond2e = text2e.substring(text2e.indexOf(' '), text2e.indexOf(' ') + 2).toUpperCase();
var lowerSecond2e = text2e.substring(text2e.indexOf(' ') + 2, text2e.length).toLowerCase();

console.log('Text: ' + text2e + ' Modified: ' + upperFirst2e + lowerFirst2e + upperSecond2e + lowerSecond2e);