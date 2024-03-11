const closeButton = document.querySelector('.icon-close');
const loginBox = document.querySelector('.login-box');
const registerBox = document.querySelector('.register-box');
const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const login = document.querySelector('.login');
const homeLink = document.querySelector("a[href='#home']");
const aboutLink = document.querySelector("a[href='#about']");
function hideForms() {
  loginBox.style.visibility = 'hidden';
  registerBox.style.visibility = 'hidden';
  container.style.visibility = 'hidden';
}

closeButton.addEventListener('click', () => {
  hideForms();
});

loginLink.addEventListener('click', () => {
  hideForms();
  loginBox.style.visibility = 'visible';
  container.style.visibility = 'visible';
});

registerLink.addEventListener('click', () => {
  hideForms();
  registerBox.style.visibility = 'visible';
  container.style.visibility = 'visible';
});

login.addEventListener('click', () => {
  hideForms();
  container.style.visibility = 'visible';
  loginBox.style.visibility = 'visible';

});

homeLink.addEventListener('click', () => {
  newPage();
});

function newPage() {
  window.location.href = 'Rocket_Game/homeLink.html';
}

aboutLink.addEventListener('click', () => {
  newPage2();
});
function newPage2() {
  window.location.href = 'About_MyProject/aboutLink.html';
}

