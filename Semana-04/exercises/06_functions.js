console.log('--EXERCISE 6: FUNCTIONS');
console.log('----------------');

/* a.
  Crear una función suma que reciba dos valores numéricos y retorne 
  el resultado. Ejecutar la función y guardar el resultado en una variable, 
  mostrando el valor de dicha variable en la consola del navegador.
*/
console.log('-Exercise 6.a:');

var value16a = 3;
var value26a = 5;

function suma(_num1, _num2){
  return _num1 + _num2;
}

var addition6a = suma(value16a,value26a);

console.log('Value 1: ' + value16a);
console.log('Value 2: ' + value26a);
console.log('Addition: ' + addition6a);
console.log('----------------');

/* b.
  A la función suma anterior, agregarle una validación para controlar si 
  alguno de los parámetros no es un número; de no ser un número, mostrar 
  una alerta aclarando que uno de los parámetros tiene error y retornar el 
  valor NaN como resultado.
*/
console.log('-Exercise 6.b:');

function addition(_num1, _num2, _message){
  if (!isNaN(_num1) && !isNaN(_num2)) {
    return _num1 + _num2;
  } else {
    return _message;
  }
}

var value16b = 3;
var value26b = 'd';
var message6b = 'error: los valores deben ser numéricos';
var addition6b = addition(value16b,value26b,message6b);

console.log('Value 1: ' + value16b);
console.log('Value 2: ' + value26b);
console.log('Addition: ' + addition6b);
console.log('----------------');

/* c.
  Aparte, crear una función validateInteger que reciba un número como 
  parámetro y devuelva verdadero si es un número entero.
*/
console.log('-Exercise 6.c:');

function validateInteger(_val){
  if (!isNaN(_val)) {
    return true;
  } else {
    return false;
  }
}

var value6c = 58;

console.log('Value: ' + value6c)
console.log(validateInteger(value6c));
console.log('----------------');

/* d.
  A la función suma del ejercicio 6b) agregarle una llamada a la función 
  del ejercicio 6c. y que valide que los números sean enteros. En caso que 
  haya decimales mostrar un alerta con el error y retornar el número 
  convertido a entero (redondeado).
*/
console.log('-Exercise 6.d:');

function addition2(_num1, _num2, _message){  
  if (validateInteger(_num1) && validateInteger(_num2)) {
    return _num1 + _num2;
  } else {
    return _message + parseInt(_num1) + ' ' + parseInt(_num2);
  }
}

var value16d = 10;
var value26d = 'j';
var message6d = 'error: los valores deben ser enteros. ';
var addition6d = addition2(value16d,value26d,message6d);

console.log('Value 1: ' + value16d);
console.log('Value 2: ' + value26d);
console.log('Addition: ' + addition6d);
console.log('----------------');

/* e.
  Convertir la validación del ejercicio 6d) en una función separada y 
  llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
console.log('-Exercise 6.e:');


console.log();
console.log('----------------');