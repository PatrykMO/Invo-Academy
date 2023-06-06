/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';

const html = `
    <div class="hero">
        <img
            src="/static/images/card-back.png"
            alt="Hero"
            class="hero__card-back"
        />
        <img
            src="/static/images/card-front.png"
            alt="Hero"
            class="hero__card-front"
        />
    </div>

    <main class="main-container">
        <div class="logo">
            <img
                src="/static/icons/logo.png"
                alt="logo"
                class="logo__icon"
            >
            <p class="logo__name">
                PayTo
            </p>
        </div>

        <form class="form">
            <h1 class="form__title">
                Add your <br/> information
            </h1>
            <div class="form__container">
                <label class="form__desc" for="card_name">
                    Name on card
                </label>
                <input class="form__input" type="text" id="card_name" placeholder="John Doe" onkeydown="return /[a-z ]/i.test(event.key)">
            </div>

            <div class="form__container">
                <label class="form__desc" for="card_number">
                    Card number
                </label>
                <input class="form__input" type="text" id="card_number" placeholder="1234 3243 1571 3145" oninput="formatCardNumber()" maxlength="16">
            </div>

            <div class="form__double-container">
                <div class="form__container--left">
                    <label class="form__desc" for="card_expiration">
                        Expiry date (MM/YY)
                    </label>
                    <input class="form__input--short" type="text" id="card_expiration" placeholder="05/25" onkeydown="return /[0-9/]/i.test(event.key) || event.key === 'Backspace' || event.key === 'Delete'" maxlength="5">
                </div>

                <div class="form__container--right">
                    <label class="form__desc" for="card_cvv">
                        CVV
                    </label>
                    <input class="form__input--short" type="text" id="card_cvv" placeholder="415" onkeydown="return /[0-9/]/i.test(event.key)" minlength='3' maxlength='3'>
                </div>
            </div>

            <button class="form__button" type="submit" disabled>
                Next step
            </button>
        </form>
    </main>
`;

const container = document.getElementById('home-page');
container.innerHTML = html;

const form = document.querySelector('.form');
const inputs = Array.from(form.querySelectorAll('.form__input, .form__input--short'));
const button = form.querySelector('.form__button');
const cardNumberInput = form.querySelector('#card_number');

const creditCardPattern = /^(\d{4}[- ]?){3}\d{4}$/;

const checkFormValidity = () => {
  const allFieldsFilled = inputs.every((input) => input.value.trim() !== '');
  const validCreditCardNumber = creditCardPattern.test(inputs[1].value);

  button.disabled = !(allFieldsFilled && validCreditCardNumber);

  if (!button.disabled) {
    button.classList.add('form__button--active');
  } else {
    button.classList.remove('form__button--active');
  }
};

inputs.forEach((input) => {
    input.addEventListener('input', checkFormValidity);
  });

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const allFieldsFilled = inputs.every((input) => input.value.trim() !== '');
  const validCreditCardNumber = creditCardPattern.test(inputs[1].value);

  if (allFieldsFilled && validCreditCardNumber) {
    alert('Success');
  }
});
