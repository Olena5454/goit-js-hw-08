import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
let parsedDataInStorage =
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputForm({ target }) {
  parsedDataInStorage[target.name] = target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(parsedDataInStorage));
}

function loadSavedInStorage() {
  if (parsedDataInStorage) {
    feedbackForm.email.value = parsedDataInStorage.email || '';
    feedbackForm.message.value = parsedDataInStorage.message || '';
  }
}

function clearStorage() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onSubmitForm(e) {
  e.preventDefault();

  if (
    e.currentTarget.email.value === '' ||
    e.currentTarget.message.value === ''
  ) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    feedbackForm.reset();
    parsedDataInStorage = {};
    clearStorage();
  }
}

loadSavedInStorage();
