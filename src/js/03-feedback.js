import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
//const selectedFilters = {};

initialForm();

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const formDataElements = {
        email,
        message,
    };
    const formData = JSON.stringify(formDataElements);
    localStorage.setItem(localStorageKey, formData);
    //const formData = new FormData(form);
    //const userForm = {};
    //formData.forEach((value, name) => (userForm[name] = value));
    //localStorage.setItem(localStorageKey, JSON.stringify(userForm));
};

function initialForm() {
    const persistedForm = localStorage.getItem(localStorageKey);
    const persistedFormValue = JSON.parse(persistedForm);
    if (persistedForm) {
        form.elements.email.value = persistedFormValue.email;
        form.elements.message.value = persistedFormValue.message;
        //persistedForm = JSON.parse(persistedForm);
        //console.log(persistedForm);
        //Object.entries(persistedForm).forEach(([name, value]) => {
            //selectedFilters[name] = value;
            //form.elements[name].value = value;
        }
    }
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const message = formElements.message.value;

    const formDataElements = {
    email,
    message,
  };
  console.log(formDataElements);

  form.reset();
    //localStorage.removeItem(localStorageKey);
    //const userForm = {};
    //const formData = new FormData(form);
    //formData.forEach((value, name) => console.log(value, name));
    //console.log(userForm);
    //form.reset();
};
