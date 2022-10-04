console.log('--EXERCISE 6: FUNCTIONS');

/* a.
  Crear una función suma que reciba dos valores numéricos y retorne 
  el resultado. Ejecutar la función y guardar el resultado en una variable, 
  mostrando el valor de dicha variable en la consola del navegador.
*/
console.log('-Exercise 6.a:');

function add(_num1, _num2){
  return console.log(_num1 + _num2);
}

add(3,5);


/* b.
  A la función suma anterior, agregarle una validación para controlar si 
  alguno de los parámetros no es un número; de no ser un número, mostrar 
  una alerta aclarando que uno de los parámetros tiene error y retornar el 
  valor NaN como resultado.
*/
console.log('-Exercise 6.b:');

function addition(_value1, _value2){
  if (!isNaN(_value1) && !isNaN(_value2)) {
    return alert(_value1 + _value2);
  } else {
    return alert('[x] values must be numbers');
  }
}

//  addition('F',20);

/* c.
  Aparte, crear una función validateInteger que reciba un número como 
  parámetro y devuelva verdadero si es un número entero.
*/
console.log('-Exercise 6.c:');

function validateInteger(_val){
  return Number.isInteger(_val);
}

console.log(validateInteger(74));

/* d.
  A la función suma del ejercicio 6b) agregarle una llamada a la función 
  del ejercicio 6c. y que valide que los números sean enteros. En caso que 
  haya decimales mostrar un alerta con el error y retornar el número 
  convertido a entero (redondeado).
*/
console.log('-Exercise 6.d:');

function addition2(_num1, _num2){  
  if (validateInteger(_num1) && validateInteger(_num2)) {
    return console.log(_num1 + _num2);
  }
  return alert('[x] values must be integer. ' ) + Math.round(_num1) + ' ' + Math.round(_num2);
}

//  addition2(6,3.2);

/* e.
  Convertir la validación del ejercicio 6d) en una función separada y 
  llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
console.log('-Exercise 6.e:');

function becomeInteger(_val){
  if (!Number.isInteger(_val)){
    return parseInt(_val);
  }
}

function addition3(_num1, _num2){  
  if (validateInteger(_num1) && validateInteger(_num2)) {
    return alert(becomeInteger(_num1) + becomeInteger(_num2));
  } else {
    return alert('[x] values must be integer. ' + Math.round(_num1) + ' ' + Math.round(_num2));
  }
}

//  addition3(5,3.2);