console.log('--EXERCISE 2: STRINGS');
console.log('----------------');

/* a.
  Crear una variable de tipo string con al menos 10 caracteres y 
  convertir todo el texto en mayúscula (utilizar toUpperCase).
*/
console.log('-Exercise 2.a:');

var text2a1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var text2a2 = text2a1.toUpperCase(text2a1);

console.log('Texto: ' + text2a1);
console.log('Texto a mayúsculas: ' + text2a2);
console.log('----------------');

/* b.
  Crear una variable de tipo string con al menos 10 caracteres y 
  generar un nuevo string con los primeros 5 caracteres guardando el 
  resultado en una nueva variable (utilizar substring).
*/
console.log('-Exercise 2.b:');

var text2b = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var subText2b = text2b.substring(0, 5);

console.log('Texto: ' + text2b);
console.log('Subtexto: ' + subText2b); 
console.log('----------------');

/* c.
  Crear una variable de tipo string con al menos 10 caracteres y generar 
  un nuevo string con los últimos 3 caracteres guardando el resultado en 
  una nueva variable (utilizar substring).
*/
console.log('-Exercise 2.c:');

var text2c = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var subText2c = text2c.substring(text2c.length - 3);

console.log('Texto: ' + text2c);
console.log('Sub texto: ' + subText2c); 
console.log('----------------');

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

console.log('Texto: ' + text2d);
console.log('Modificado: ' + upperFirst + lowerText); 
console.log('----------------');

/* e.
  Crear una variable de tipo string con al menos 10 caracteres y algún 
  espacio en blanco. Encontrar la posición del primer espacio en blanco y 
  guardarla en una variable (utilizar indexOf).
*/
console.log('-Exercise 2.e:');

var text2e = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
var blankSpace = text2e.indexOf(' ');

console.log('Texto: ' + text2e);
console.log('Posición del primer espacio en blanco: ' + (blankSpace + 1));
console.log('----------------');

/* f.
    Crear una variable de tipo string con al menos 2 palabras largas 
    (10 caracteres y algún espacio entre medio). Utilizar los métodos de los 
    ejercicios anteriores para generar un nuevo string que tenga la primera 
    letra de ambas palabras en mayúscula y las demás letras en minúscula 
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('-Exercise 2.f:');

var text2e = 'consectetur adipisicing';
var upperFirst2e = text2e.substring(0,1).toUpperCase();
var lowerText2e = text2e.slice(1).toLowerCase();

console.log('Texto: ' + text2e);
console.log('Modificado: ' + upperFirst2e + lowerText2e);
console.log('----------------');