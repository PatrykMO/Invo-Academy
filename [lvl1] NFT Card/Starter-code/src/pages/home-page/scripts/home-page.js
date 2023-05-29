/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.
import '../styles/home-page.scss';

const html = `
    <div class="nftcard">

        <div class="nftcard__background">
            <img
                src='/static/images/Hero.png'
                class="nftcard__background--img"
            />
        </div>

        <div class="nftcard__content">
            <div class="nftcard__info-container">
                <h1 class='nftcard__title'>
                    Equilibrium #3429
                </h1>
                <h3 class='nftcard__desc'>
                    Equilibrium is an NFT that will appeal to many players.
                </h3>
            </div>

            <div class="nftcard__details-container">
                <div class="nftcard__price-container">
                    <img
                        src='/static/images/diamond.png'
                        alt='diamond'
                        class="nftcard__icon"
                    />
                    <h3 class="nftcard__price-value">0.041 ETH</h3>
                </div>

                <div class="nftcard__time-container">
                    <img
                        src='/static/images/clock.png'
                        alt='clock'
                        class="nftcard__icon"
                    />
                    <p class="nftcard__time-value">3 days left</p>
                </div>
            </div>

            <div class="nftcard__stroke"></div>

            <div class="nftcard__author-container">
                <img
                    src='/static/images/Eva.jpg'
                    alt='Eva'
                    class="nftcard__photo"
                />
                <h3 class="nftcard__name">
                    Creation of <span class="nftcard__name--bold">Eva Smitch</span>
                </h3>
            </div>
        </div>
    </div>
`;

const container = document.getElementById("home-page");
container.innerHTML = html;



