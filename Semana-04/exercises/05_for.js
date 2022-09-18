console.log('--EXERCISE 5: FOR');
console.log('----------------');

/* a.
  Crear un array que contenga 5 palabras y recorrer dicho array utilizando 
  un bucle for de JavaScript para mostrar una alerta utilizando cada una 
  de las palabras.
*/
console.log('-Exercise 5.a:');

var words = ['red', 'blue', 'yellow', 'green', 'black'];

for (var i = 0; i < words.length; i++) {
  alert(words[i]);  
}

console.log('Palabras: ' + words);
console.log('----------------');

/* b.
  Al array anterior convertir la primera letra de cada palabra en mayúscula 
  y mostrar una alerta por cada palabra modificada.
*/
console.log('-Exercise 5.b:');

var wordsUpper = [];
var wordsLower = [];

for (var i = 0; i < words.length; i++) {
  wordsUpper = words[i].substring(0, 1).toUpperCase();
  wordsLower = words[i].substring(1, 100).toLowerCase();
  alert(wordsUpper + wordsLower);
}

console.log('Palabras: ' + wordsUpper + wordsLower);
console.log('----------------');

/* c.
  Crear una variable llamada “sentence” que tenga un string vacío, luego al 
  array del punto a) recorrerlo con un bucle for para ir guardando cada 
  palabra dentro de la variable sentence. Al final mostrar una única alerta 
  con la cadena completa.
*/
console.log('-Exercise 5.c:');

var sentence = '';

for (var i = 0; i < words.length; i++) {
  sentence += words[i].toString(words);
}

alert(sentence);
console.log(sentence);
console.log('----------------');

/* d.
  Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el 
  array con el número de la repetición, es decir que al final de la 
  ejecución del bucle for debería haber 10 elementos dentro del array, 
  desde el número 0 hasta al número 9. Mostrar por la consola del navegador 
  el array final (utilizar console.log).
*/
console.log('-Exercise 5.d:');

var array5d = [];

for (var i = 0; i < 10; i++) {
  array5d.push(array5d[i]);
}

console.log(array5d);
console.log('----------------');