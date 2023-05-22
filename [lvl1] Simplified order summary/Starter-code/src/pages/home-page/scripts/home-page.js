/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';
import { startPayment } from '../../../global-scripts/main';


const html = `
<div class="component-container" id="loading">
    <div class="image-container">
    <img
        src="/static/images/women.png"
        alt="Women listening to music"
        class="image-container__img"/>
    </div>

    <div class="content-container">
    <div class="content-container__info">
        <h1 class="content-container__info__title">
        Order Summary
        </h1>
        <p class="content-container__info__desc">
        You're close! Confirm your purchase and complete your order in the next step
        </p>
    </div>

    <div class="content-container__plan">
        <div class="content-container__plan__details">
            <img
                src="/static/images/music.png"
                alt=""
                class="content-container__plan__details__icon"
            >

            <div class="content-container__plan__details__stroke"></div>

            <div class="content-container__plan__details__info">
                <h2 class="content-container__plan__details__info__type">
                Annual Plan
                </h2>
                <p class="content-container__plan__details__info__price">
                $58.99 / year
                </p>
            </div>
        </div>

        <a href="#">
            <h3 class="content-container__plan__mod">
            Change
            </h3>
        </a>
    </div>

    <div class="payment-container">
        <button
        class="button"
        id="paymentButton"
        >
        Proceed to Payment
        </button>

        <a href="#">
            <h3 class="payment-container__cancelation">
                Cancel Order
            </h3>
        </a>
    </div>
    </div>
</div>
`;

const container = document.getElementById("home-page");
container.innerHTML = html;

const paymentButton = document.getElementById("paymentButton");
paymentButton.addEventListener("click", startPayment);
