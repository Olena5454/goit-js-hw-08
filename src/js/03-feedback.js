import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailMessage = {};

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

function onInputForm(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;
  emailMessage.email = email.value;
  emailMessage.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(emailMessage));
}

function loadSavedInStorage() {
  const parsedDataInStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (parsedDataInStorage) {
    feedbackForm.email.value = parsedDataInStorage.email;
    feedbackForm.message.value = parsedDataInStorage.message;
  }
}

function clearStorage() {
  localStorage.removeItem('feedback-form-state');
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  feedbackForm.reset();
  clearStorage();
}

loadSavedInStorage();
