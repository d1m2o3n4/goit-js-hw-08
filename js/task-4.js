const formEl = document.querySelector('.login-form');
const emailEl = document.querySelector('.js-email');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (!email.value.trim() || !password.value.trim()) {
    return alert('All form fields must be filled in');
  }
  console.log({ email: email.value.trim(), password: password.value.trim() });
  event.currentTarget.reset();
});
