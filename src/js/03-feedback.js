const form = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');
const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveFeedback, 500));
form.addEventListener('submit', onSubmit);

loadFeedback();

function saveFeedback() {
  const feedback = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
}

function loadFeedback() {
  if (localStorage.getItem(FEEDBACK_KEY)) {
    const parsedFeedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
    form.elements.email.value = parsedFeedback.email;
    form.elements.message.value = parsedFeedback.message;
  }
}

function onSubmit(e) {
  e.preventDefault();

  if (!e.currentTarget.email.value || !e.currentTarget.message.value) {
    alert('Please fill in all the fields!');
  } else {
    if (JSON.parse(localStorage.getItem(FEEDBACK_KEY)) !== null) {
      console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));
    }

    form.reset();
    localStorage.clear();
  }
}
