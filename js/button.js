
const inputField = document.querySelector('[data-input="inputField"]');
const colorChangeButton = document.querySelector('#colorChangeButton');

inputField.addEventListener('input', () => {
    if (inputField.value.length >= 5) {
        colorChangeButton.classList.add('form__btn--active');
    } else {
        colorChangeButton.classList.remove('form__btn--active');
    }
});