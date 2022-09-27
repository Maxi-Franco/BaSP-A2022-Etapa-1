window.onload = function(){

  // ------- globals
  var contentLetters = false;
  var contentNumbers = false;
  var passwordValid = false;
  var emailValid = false;
  var emailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
  
  // ------- event calls
  var loginButton = document.querySelector('#btnLogin');
  var loginEmail = document.querySelector('#logEmail');
  var loginPassword = document.querySelector('#logPassword');

  // --------  functions
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
  
  // --------- processing
  loginEmail.addEventListener('blur', function(){
    if (emailFormat.test(loginEmail.value)){
      loginEmail.classList.add('border-green');
      emailValid = true;
    } else {
      loginEmail.classList.add('border-red');
      emailValid = false;
    }
  });

  loginEmail.onfocus = function(){
    loginEmail.classList.remove('border-green', 'border-red');
  }
  
  loginPassword.addEventListener('blur', function(){
    var verifyPassContLetters = containLetters(loginPassword.value);
    var verifyPassContNumbers = containNumbers(loginPassword.value);
    if (verifyPassContLetters && verifyPassContNumbers){
      loginPassword.classList.add('border-green');
      passwordValid = true;
    } else { 
      loginPassword.classList.add('border-red');
      passwordValid = false;
    }
  });

  loginPassword.onfocus = function(){
    loginPassword.classList.remove('border-green', 'border-red');
  }
  
  loginButton.addEventListener('click', function(e){
    e.preventDefault();
    if (emailValid && passwordValid){
      alert('Welcome!');
    } else {
      alert('Invalid email or password');
    }
  });
}