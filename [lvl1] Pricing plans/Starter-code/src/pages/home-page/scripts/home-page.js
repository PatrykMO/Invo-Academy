/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.
import '../styles/home-page.scss';

const html = `
<div class="component-container">
    <header class="header">
    <h1 class="header__title">
        Pricing
    </h1>

    <p class="header__desc">
        Choose the right pricing for you and get started with your project.
    </p>
    </header>

    <main class="main">
    <div class="main__card-container">
        <div class="main__card-container__content">
        <h1 class="main__card-container__content__title">
            Basic
        </h1>

        <div class="main__card-container__content__price">
        <span class="main__card-container__content__price__currency">$</span>
            <h1 class="main__card-container__content__price__value">399</h1>
            <span class="main__card-container__content__price__period">/year</span>
        </div>

        <h2 class="main__card-container__content__desc">
            For organizing every corner of your work & life.
        </h2>

        <div class="main__card-container__content__benefits">
            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                Collaborative workspace
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                7 day page history
            </p>
            </div>
        </div>

        <a href="#">
            <button class="main__button">
            Get started
            </button>
        </a>
        </div>
    </div>

    <div class="main__card-container --dark">
        <div class="main__card-container__content">
        <h1 class="main__card-container__content__title">
            Professional
        </h1>

        <div class="main__card-container__content__price">
        <span class="main__card-container__content__price__currency">$</span>
            <h1 class="main__card-container__content__price__value">499</h1>
            <span class="main__card-container__content__price__period">/year</span>
        </div>

        <h2 class="main__card-container__content__desc">
            A place for small groups to plan & get organized.
        </h2>

        <div class="main__card-container__content__benefits">
            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                All features in Basic
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                Unlimited blocks for teams
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                30 day page history
            </p>
            </div>
        </div>

        <a href="#">
            <button class="main__button --purple">
            Get started
            </button>
        </a>
        </div>
    </div>

    <div class="main__card-container">
        <div class="main__card-container__content">
        <h1 class="main__card-container__content__title">
            Enterprise
        </h1>

        <div class="main__card-container__content__price">
        <span class="main__card-container__content__price__currency">$</span>
            <h1 class="main__card-container__content__price__value">599</h1>
            <span class="main__card-container__content__price__period">/year</span>
        </div>

        <h2 class="main__card-container__content__desc">
            For companies using our software to connect several teams & tools.
        </h2>

        <div class="main__card-container__content__benefits">
            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                SAML SSO
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                Private teamspaces
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                Advanced page analytics
            </p>
            </div>

            <div class="main__card-container__content__benefits__info">
            <img
                src="/static/icons/icon.png"
                alt="check icon"
                class="main__card-container__content__benefits__info__img"
            />
            <p class="main__card-container__content__benefits__info__desc">
                90 day page history
            </p>
            </div>
        </div>

        <a href="#">
            <button class="main__button">
            Get started
            </button>
        </a>
        </div>
    </div>
    </main>
</div>
`;

const container = document.getElementById("home-page");
container.innerHTML = html;



