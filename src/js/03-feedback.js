
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const KEY_STORAGE_FORM = 'feedback-form-state';
dataForm = {};


getDataFormStorage();
form.addEventListener('input', throttle(loadDataFormStorage, 500));
form.addEventListener('submit', cleanDataFormStorage);


function loadDataFormStorage(event) {
    dataForm[event.target.name] = event.target.value;
    const stringData = JSON.stringify(dataForm);

    localStorage.setItem(KEY_STORAGE_FORM, stringData);
};

function cleanDataFormStorage(event) {
    event.preventDefault();
    
    event.currentTarget.reset();
    localStorage.removeItem(KEY_STORAGE_FORM);

    console.log(dataForm);
};

function getDataFormStorage() {
    const data = JSON.parse(localStorage.getItem(KEY_STORAGE_FORM));

    if (data) {
        email.value = data.email || '';
        dataForm.email = data.email || '';

        message.value = data.message || '';
        dataForm.message = data.message || '';
    };
};