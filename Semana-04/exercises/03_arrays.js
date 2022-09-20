console.log('--EXERCISE 3: ARRAYS');
console.log('----------------');

/* a.
  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
  "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log('-Exercise 3.a:');

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
              'August', 'September', 'October', 'November', 'December'];

console.log('Mes 5: ' + month[4] + ', Mes 11: ' + month[10]);

/* b.
  Ordenar el array de meses alfabéticamente y mostrarlo por consola 
  (utilizar sort).
*/
console.log('-Exercise 3.b:');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
              'August', 'September', 'October', 'November', 'December'];

var monthsAZ = months.sort();

console.table(monthsAZ);

/* c.
  Agregar un elemento al principio y al final del array 
  (utilizar unshift y push).
*/
console.log('-Exercise 3.c:');

var colorsAdd = ['Red', 'Blue', 'Yellow', 'Violet', 'Green']

colorsAdd.unshift('Black');
colorsAdd.push('White');

console.table(colorsAdd);

/* d.
  Quitar un elemento del principio y del final del array 
  (utilizar shift y pop).
*/
console.log('-Exercise 3.d:');

var colorsLess = ['Black', 'Red', 'Blue', 'Yellow', 'Violet', 'Green', 'White']

colorsLess.shift();
colorsLess.pop();

console.table(colorsLess);

/* e.
  Invertir el orden del array (utilizar reverse).
*/
console.log('-Exercise 3.e:');

var numbers123 = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

var numberReverse = numbers123.reverse();

console.table(numberReverse);

/* f.
  Unir todos los elementos del array en un único string 
  donde cada mes este separado por un guión - (utilizar join).
*/
console.log('-Exercise 3.f:');

var months123 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
              'August', 'September', 'October', 'November', 'December'];

var monthsSeparated = months123.join('-');

console.log(monthsSeparated);

/* g.
  Crear una copia del array de meses que contenga 
  desde Mayo hasta Noviembre (utilizar slice).
*/
console.log('-Exercise 3.g:');

var year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
              'August', 'September', 'October', 'November', 'December'];

var yearSlice = year.slice(4, 11);

console.table(yearSlice);