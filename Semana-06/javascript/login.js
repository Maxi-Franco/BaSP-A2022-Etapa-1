window.onload = function(){

  // ------- globals
  var contentLetters = false;
  var contentNumbers = false;
  var passwordValid = false;
  var emailValid = false;
  var emailFormat = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var alphabet = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

  // ------- events / calls
  var loginEmail = document.querySelector('#login-email');
  var loginEmailError = document.querySelector('#login-email-error');
  loginEmailError.classList.add('login-error');
  
  var loginPassword = document.querySelector('#login-password');
  var loginPasswordError = document.querySelector('#login-password-error');
  loginPasswordError.classList.add('login-error');

  var loginButton = document.querySelector('#btn-login');

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
  
  // --------- email processing
  loginEmail.addEventListener('blur', function(){
    if (emailFormat.test(loginEmail.value)){
      loginEmail.classList.add('border-green');
      emailValid = true;
    } else {
      loginEmail.classList.add('border-red');
      loginEmailError.innerHTML = 'Invalid email';
      emailValid = false;
    }
  });
  loginEmail.onfocus = function(){
    loginEmail.classList.remove('border-green', 'border-red');
    loginEmailError.innerHTML = '';
  } 
  
  // --------- password processing
  loginPassword.addEventListener('blur', function(){
    if (containLetters(loginPassword.value) && containNumbers(loginPassword.value)){
      loginPassword.classList.add('border-green');
      passwordValid = true;
    } else { 
      loginPassword.classList.add('border-red');
      loginPasswordError.innerHTML = 'Invalid password';
      passwordValid = false;
    }
    contentLetters = false;
    contentNumbers = false;
  });
  loginPassword.onfocus = function(){
    loginPassword.classList.remove('border-green', 'border-red');
    loginPasswordError.innerHTML = '';
  }
  
  // --------- login button
  loginButton.addEventListener('click', function(e){
    e.preventDefault();    
    if (emailValid && passwordValid){
      alert('Welcome! ' + loginEmail.value + ' ' + loginPassword.value);
    } else if (!emailValid && passwordValid){
      alert('Invalid email');
    } else if (emailValid && !passwordValid){
      alert('Invalid password');
    } else if (!emailValid && !passwordValid){
      alert('Invalid email & password');
    }
  });
}