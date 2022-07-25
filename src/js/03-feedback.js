import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

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
//сохраняемая форма
function initialForm() {
    const persistedForm = localStorage.getItem('localStorageKey');
    if (persistedForm) {
        persistedForm = JSON.parse(persistedForm);
        console.log(persistedForm);
        Object.entries(persistedForm).forEach(([name, value]) => {
            form.elements[name].value = value;
        })
    }
};
//кнопка при отправке
form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    const userForm = {};
    const formData = new FormData(form);
    formData.forEach((value, name) => (userForm[name] = value));
    console.log(userForm);
    form.reset();
};
