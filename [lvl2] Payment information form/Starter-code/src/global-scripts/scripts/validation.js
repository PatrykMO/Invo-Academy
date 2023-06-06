const form = document.querySelector('.form');
const inputs = Array.from(form.querySelectorAll('.form__input'));
const button = form.querySelector('.form__button');

const creditCardPattern = /^(\d{4}[- ]?){3}\d{4}$/;

export const chceckFormValidity = () => {
    const allFieldsFilled = inputs.every(input => input.value.trim() !== '');
    const validCreditCardNumber = creditCardPattern.test(inputs[1].value);

}