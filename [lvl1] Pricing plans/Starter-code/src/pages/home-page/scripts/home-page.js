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
            <div class="card-container">
                <div class="card-container__content">
                    <h1 class="card-container__content-title">
                        Basic
                    </h1>

                    <div class="card-container__content__price-container">
                        <span class="card-container__content__price-currency">$</span>
                        <h1 class="card-container__content__price-value">399</h1>
                        <span class="card-container__content__price-period">/year</span>
                    </div>

                    <h2 class="card-container__content-desc">
                        For organizing every corner of your work & life.
                    </h2>

                    <div class="card-container__content__benefits-container">
                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                Collaborative workspace
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
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

            <div class="card-container--dark">
                <div class="card-container__content">
                    <h1 class="card-container__content-title--dark">
                        Professional
                    </h1>

                    <div class="card-container__content__price-container--dark">
                        <span class="card-container__content__price-currency">$</span>
                        <h1 class="card-container__content__price-value">499</h1>
                        <span class="card-container__content__price-period">/year</span>
                    </div>

                    <h2 class="card-container__content-desc">
                        A place for small groups to plan & get organized.
                    </h2>

                    <div class="card-container__content__benefits-container--dark">
                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                All features in Basic
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                Unlimited blocks for teams
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                30 day page history
                            </p>
                        </div>
                    </div>

                    <a href="#">
                        <button class="button --purple">
                        Get started
                        </button>
                    </a>
                </div>
            </div>

            <div class="card-container">
                <div class="card-container__content">
                    <h1 class="card-container__content-title">
                        Enterprise
                    </h1>

                    <div class="card-container__content__price-container">
                        <span class="card-container__content__price-currency">$</span>
                        <h1 class="card-container__content__price-value">599</h1>
                        <span class="card-container__content__price-period">/year</span>
                    </div>

                    <h2 class="card-container__content-desc">
                        For companies using our software to connect several teams & tools.
                    </h2>

                    <div class="card-container__content__benefits-container">
                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                SAML SSO
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                Private teamspaces
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
                                Advanced page analytics
                            </p>
                        </div>

                        <div class="card-container__content__benefits-info">
                            <img
                                src="/static/icons/icon.png"
                                alt="check icon"
                                class="card-container__content__benefits-img"
                            />
                            <p class="card-container__content__benefits-desc">
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



