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
            <div class="nftcard__content--info-container">
                <h1 class='nftcard__content--title'>
                    Equilibrium #3429
                </h1>
                <h3 class='nftcard__content--desc'>
                    Equilibrium is an NFT that will appeal to many players.
                </h3>
            </div>

            <div class="nftcard__content--details-container">
                <div class="nftcard__content--price-container">
                    <img
                        src='/static/images/diamond.png'
                        alt='diamond'
                        class="nftcard__content--icon"
                    />
                    <h3 class="nftcard__content--value">0.041 ETH</h3>
                </div>

                <div class="nftcard__content--time-container">
                    <img
                        src='/static/images/clock.png'
                        alt='clock'
                        class="nftcard__content--icon"
                    />
                    <p class="nftcard__content--time-value">3 days left</p>
                </div>
            </div>

            <div class="nftcard__content--stroke"></div>

            <div class="nftcard__content--author">
                <img
                    src='/static/images/Eva.jpg'
                    alt='Eva'
                    class="nftcard__content--photo"
                />
                <h3 class="nftcard__content--name">
                    Creation of <span>Eva Smitch</span>
                </h3>
            </div>
        </div>
    </div>
`;

const container = document.getElementById("home-page");
container.innerHTML = html;



