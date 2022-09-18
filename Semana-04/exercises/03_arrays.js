console.log('--EXERCISE 3: ARRAYS');
console.log('----------------');

/* a.
  Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
  "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
  "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/
console.log('-Exercise 3.a:');

var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
              'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log('Mes 5: ' + month[4]);
console.log('Mes 11: ' + month[10]);
console.log('----------------');

/* b.
  Ordenar el array de meses alfabéticamente y mostrarlo por consola 
  (utilizar sort).
*/
console.log('-Exercise 3.b:');

var monthAlph = month.sort();

console.log('Meses alfabéticamente:');
console.table(monthAlph);
console.log('----------------');

/* c.
  Agregar un elemento al principio y al final del array 
  (utilizar unshift y push).
*/
console.log('-Exercise 3.c:');

month.unshift('Black');
month.push('White');

console.log('Agregar elementos');
console.table(month);
console.log('----------------');

/* d.
  Quitar un elemento del principio y del final del array 
  (utilizar shift y pop).
*/
console.log('-Exercise 3.d:');

month.shift();
month.pop();

console.log('Quitar elementos');
console.table(month);
console.log('----------------');

/* e.
  Invertir el orden del array (utilizar reverse).
*/
console.log('-Exercise 3.e:');

var monthReverse = month.reverse();

console.log('Reverse');
console.table(monthReverse);
console.log('----------------');

/* f.
  Unir todos los elementos del array en un único string 
  donde cada mes este separado por un guión - (utilizar join).
*/
console.log('-Exercise 3.f:');

var monthSeparated = month.join('-');

console.log(monthSeparated);
console.log('----------------');

/* g.
  Crear una copia del array de meses que contenga 
  desde Mayo hasta Noviembre (utilizar slice).
*/
console.log('-Exercise 3.g:');

var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
              'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var monthSlice = month.slice(4, 11);

console.table(monthSlice);
console.log('----------------');