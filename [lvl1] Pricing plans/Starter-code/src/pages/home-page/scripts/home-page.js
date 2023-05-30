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
            <div class="card">
                <div class="card__content">
                    <h1 class="card__title">
                        Basic
                    </h1>

                    <div class="card__price-container">
                        <span class="card__price-currency">$</span>
                        <h1 class="card__price-value">399</h1>
                        <span class="card__price-period">/year</span>
                    </div>

                    <h2 class="card__desc">
                        For organizing every corner of your work & life.
                    </h2>

                    <div class="card__benefits-container">
                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                Collaborative workspace
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                7 day page history
                            </p>
                        </div>
                    </div>

                    <a href="#">
                        <button class="button">
                        Get started
                        </button>
                    </a>
                </div>
            </div>

            <div class="card--dark">
                <div class="card__content">
                    <h1 class="card__title--dark">
                        Professional
                    </h1>

                    <div class="card__price-container--dark">
                        <span class="card__price-currency">$</span>
                        <h1 class="card__price-value">499</h1>
                        <span class="card__price-period">/year</span>
                    </div>

                    <h2 class="card__desc">
                        A place for small groups to plan & get organized.
                    </h2>

                    <div class="card__benefits-container--dark">
                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                All features in Basic
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                Unlimited blocks for teams
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                30 day page history
                            </p>
                        </div>
                    </div>

                    <a href="#">
                        <button class="button--purple">
                        Get started
                        </button>
                    </a>
                </div>
            </div>

            <div class="card">
                <div class="card__content">
                    <h1 class="card__title">
                        Enterprise
                    </h1>

                    <div class="card__price-container">
                        <span class="card__price-currency">$</span>
                        <h1 class="card__price-value">599</h1>
                        <span class="card__price-period">/year</span>
                    </div>

                    <h2 class="card__desc">
                        For companies using our software to connect several teams & tools.
                    </h2>

                    <div class="card__benefits-container">
                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                SAML SSO
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                Private teamspaces
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                Advanced page analytics
                            </p>
                        </div>

                        <div class="card__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card__benefits-img"
                            />
                            <p class="card__benefits-desc">
                                90 day page history
                            </p>
                        </div>
                    </div>

                    <a href="#">
                        <button class="button">
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



