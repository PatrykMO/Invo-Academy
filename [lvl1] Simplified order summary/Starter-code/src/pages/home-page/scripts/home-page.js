/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss';
import { startPayment } from '../../../global-scripts/main';


const html = `
    <div class="component-container">
        <div class="image-container">
            <img
                src="/static/images/women.png"
                alt="Women listening to music"
                class="image-container__content"
            />
        </div>

        <div class="content-container">
            <div class="content-container__info-container">
                <h1 class="content-container__info-title">
                    Order Summary
                </h1>
                <p class="content-container__info-desc">
                    You're close! Confirm your purchase and complete your order in the next step
                </p>
            </div>

            <div class="content-container__plan-container">
                <div class="content-container__plan-details">
                    <img
                        src="/static/images/music.png"
                        alt=""
                        class="content-container__plan-icon"
                    >

                    <div class="content-container__plan-stroke"></div>

                    <div class="content-container__plan-info">
                        <h2 class="content-container__plan-type">
                            Annual Plan
                        </h2>
                        <p class="content-container__plan-price">
                            $58.99 / year
                        </p>
                    </div>
                </div>

                <a href="#" class="content-container__plan-link">
                    <h3 class="content-container__plan-mod">
                    Change
                    </h3>
                </a>
            </div>

            <div class="payment-container">
                <button
                    class="payment-container__button"
                    id="paymentButton"
                >
                    <span id="buttonText" class="payment-container__text">Proceed to Payment</span>
                    <span id="loadingSpinner" class="payment-container__spinner"></span>
                </button>

                <a href="#" class="payment-container__cancelation-link--nounderline">
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