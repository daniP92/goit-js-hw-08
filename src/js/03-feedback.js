import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailElement = document.querySelector('label [name="email"]');
const messageElement = document.querySelector('label [name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const email = emailElement.value;
  const message = messageElement.value;

  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

onPageReload();

function onPageReload() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage) {
    emailElement.value = savedMessage.email;
    messageElement.value = savedMessage.message;
  }
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = emailElement.value;
  const message = messageElement.value;

  if (email == '' || message == '') {
    alert('Enter both input parameters!');
    form.reset();
    return false;
  }

  const formData = {
    email,
    message,
  };

  console.log(formData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
