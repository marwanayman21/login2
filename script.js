document.getElementById('registerLink').addEventListener('click', function () {
    document.body.classList.toggle('register-form');
    document.body.classList.toggle('login-form');
    document.querySelector('.wrapper').classList.toggle('active');
  });

  document.getElementById('loginLink').addEventListener('click', function () {
    document.body.classList.toggle('login-form');
    document.body.classList.toggle('register-form');
    document.querySelector('.wrapper').classList.toggle('active');
  });