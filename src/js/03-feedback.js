import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailMessage = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputForm({ target }) {
  emailMessage[target.name] = target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(emailMessage));
}

function loadSavedInStorage() {
  const parsedDataInStorage = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEY)
  );
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
    clearStorage();
  }
}

loadSavedInStorage();
