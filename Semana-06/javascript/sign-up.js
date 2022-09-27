window.onload = function(){
  
  // ------- globals
  var contentLetters = false;
  var contentNumbers = false;
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
  var emailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  // ------- event calls
  var spFirstName = document.querySelector('#upFirstName');
  var spLastName = document.querySelector('#upLastName');
  var spDNI = document.querySelector('#upDNI');
  var spBirthDate = document.querySelector('#upBirthDate');
  var spPhone = document.querySelector('#upPhone');
  var spLocation = document.querySelector('#upLocation');
  var spAdress = document.querySelector('#upAdress');
  var spPostalCode = document.querySelector('#upPostalCode');
  var spEmail = document.querySelector('#upEmail');
  var spPassword = document.querySelector('#upPassword');
  var spRepeatPassword = document.querySelector('#upRepeatPassword');

  // ---------  functions
  function containNumbers(_data){
    for (var index = 0; index < numbers.length; index++) {
      for (var i = 0; i < _data.length; i++){
        if (contentNumbers === false){
          if (numbers[index] === _data[i]){
            contentNumbers = true;
          } else {
            contentNumbers = false;
          }
        }
      }
    }
    return contentNumbers;
  }

  function containLetters(_data){
    for (var index = 0; index < alphabet.length; index++) {
      for (var i = 0; i < _data.length; i++) {
        if (contentLetters === false) {
          contentLetters = alphabet[index] === _data[i];
        }
      }
    }
    return contentLetters;
  }

  function containOnlyNumbers(_data){
    for (var index = 0; index < _data.length; index++) {
      if (isNaN(_data[index])){
        return false;
      }      
    }
    return true;
  }

  function containOnlyLetters(_data){
    for (var index = 0; index < _data.length; index++) {
      if (!isNaN(_data[index])){
        return false;
      }      
    }
    return true;
  }

  function validateEmail(_email){
    if (emailFormat.test(_email)){
      return true;
    }
    return false;
  }

  function validateDateFormat(_date){
    var slash = _date.split('/');
    var day = slash[0];
    var month = slash[1];
    var year = slash[2];
    if (day >= 1 && day <= 31 && month >=1 && month <= 12 && year.length === 4) {
      return true;
    }
    return false;
  }

  function containSpace(_data){
    for (var index = 1; _data.length -1 ; index++){
      if (_data[index] === ' ') {
        return true;
      }
    }
    return false;
  }

  function validateAdress(_data){
    if (containNumbers(_data) && containLetters(_data) && _data.length >= 5 && containSpace(_data)) {
      return true;    
    }
    return false;
  }

  // -------- processing
  spFirstName.addEventListener('blur', function(){
    spFirstName.classList.remove('border-green', 'border-red');
    if (containOnlyLetters(spFirstName.value) && spFirstName.value.length >= 3) {
      spFirstName.classList.add('border-green');
    } else {
      spFirstName.classList.add('border-red');
    }
  })

  spLastName.addEventListener('blur', function(){
    spLastName.classList.remove('border-green', 'border-red');
    if (containOnlyLetters(spLastName.value) && spLastName.value.length >= 3) {
      spLastName.classList.add('border-green');
    } else {
      spLastName.classList.add('border-red');
    }
  })

  spDNI.addEventListener('blur', function(){
    spDNI.classList.remove('border-green', 'border-red');
    if (containOnlyNumbers(spDNI.value) && spDNI.value.length > 7) {
      spDNI.classList.add('border-green');
    } else {
      spDNI.classList.add('border-red');
    }
  })

  spBirthDate.addEventListener('blur', function(){
    spBirthDate.classList.remove('border-green', 'border-red');
    if (containOnlyNumbers(spBirthDate.value) && spBirthDate.value.length > 7) {
      spBirthDate.classList.add('border-green');
    } else {
      spBirthDate.classList.add('border-red');
    }
  })

  spPhone.addEventListener('blur', function(){
    spPhone.classList.remove('border-green', 'border-red');
    if (containOnlyNumbers(spPhone.value) && spPhone.value.length === 10) {
      spPhone.classList.add('border-green');
    } else {
      spPhone.classList.add('border-red');
    }
  })

  spLocation.addEventListener('blur', function(){
    spLocation.classList.remove('border-green', 'border-red');
    if (containLetters(spLocation.value) && containNumbers(spLocation.value) && spLocation.value.length > 3) {
      spLocation.classList.add('border-green');
    } else {
      spLocation.classList.add('border-red');
    }
  })

  spAdress.addEventListener('blur', function(){
    spAdress.classList.remove('border-green', 'border-red');
    if (validateAdress(spAdress.value)) {
      spAdress.classList.add('border-green');
    } else {
      spAdress.classList.add('border-red');
    }
  })

  spPostalCode.addEventListener('blur', function(){
    spPostalCode.classList.remove('border-green', 'border-red');
    if (containOnlyNumbers(spPostalCode.value) 
      && spPostalCode.value.length >= 4 
      && spPostalCode.value.length <= 5) {
      spPostalCode.classList.add('border-green');
    } else {
      spPostalCode.classList.add('border-red');
    }
  })

  spEmail.addEventListener('blur', function(){
    spEmail.classList.remove('border-green', 'border-red');
    if (validateEmail(spEmail.value)) {
      spEmail.classList.add('border-green');
    } else {
      spEmail.classList.add('border-red');
    }
  })

  spPassword.addEventListener('blur', function(){
    spPassword.classList.remove('border-green', 'border-red');
    if (containLetters(spPassword.value) 
      && containNumbers(spPassword.value) 
      && spPassword.value.length >= 8) {
      spPassword.classList.add('border-green');
    } else {
      spPassword.classList.add('border-red');
    }
  })

  spRepeatPassword.addEventListener('blur', function(){
    spRepeatPassword.classList.remove('border-green', 'border-red');
    if (containLetters(spRepeatPassword.value) 
      && containNumbers(spRepeatPassword.value) 
      && spRepeatPassword.value.length >= 8) {
      spRepeatPassword.classList.add('border-green');
    } else {
      spRepeatPassword.classList.add('border-red');
    }
  })
}