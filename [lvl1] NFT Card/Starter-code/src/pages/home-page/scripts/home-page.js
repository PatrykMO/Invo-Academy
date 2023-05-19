/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.
import '../styles/home-page.scss';

const html = `
    <div class="nftcard-component">

        <div class="nftcard-component__background">
            <img
                src='/static/images/Hero.png'
                class="nftcard-component__background__img"
            />
        </div>

        <div class="nftcard-component__content">
            <div class="nftcard-component__content__info-container">
                <h1 class='nftcard-component__content__info-container__title'>
                    Equilibrium #3429
                </h1>
                <h3 class='nftcard-component__content__info-container__desc'>
                    Equilibrium is an NFT that will appeal to many players.
                </h3>
            </div>

            <div class="nftcard-component__content__details-container">
                <div class="nftcard-component__content__details-container__price">
                    <img
                        src='/static/images/diamond.png'
                        alt='diamond'
                        class="nftcard-component__content__details-container__price__icon"
                    />
                    <h3 class="nftcard-component__content__details-container__price__value">0.041 ETH</h3>
                </div>

                <div class="nftcard-component__content__details-container__time">
                    <img
                        src='/static/images/clock.png'
                        alt='clock'
                        class="nftcard-component__content__details-container__time__icon"
                    />
                    <p class="nftcard-component__content__details-container__time__value">3 days left</p>
                </div>
            </div>

            <div class="nftcard-component__content__stroke"></div>

            <div class="nftcard-component__content__author">
                <img
                    src='/static/images/Eva.jpg'
                    alt='Eva'
                    class="nftcard-component__content__author__icon"
                />
                <h3 class="nftcard-component__content__author__name">
                    Creation of <span>Eva Smitch</span>
                </h3>
            </div>
        </div>
    </div>
`;

const container = document.getElementById("home-page");
container.innerHTML = html;



