/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import { songs } from '../../../global-scripts/main';
import { createSongBars, } from '../../../global-scripts/main';
import { toggleActive, toggleMenu } from '../../../global-scripts/main';
import '../styles/home-page.scss';

const html = `
    <div class="wrapper">
        <div class="navbar">
            <div class="navbar__arrows-container">
                <div class="navbar__arrows-background">
                    <img
                        src="/static/icons/arrow.png"
                        alt="Backward"
                        class="navbar__arrows-img"
                    />
                </div>
                <div class="navbar__arrows-background--right">
                    <img
                        src="/static/icons/arrow.png"
                        alt="Forward"
                        class="navbar__arrows-img--right"
                    />
                </div>
            </div>

            <div class="navbar__user">
                <div class="navbar__user-hover">
                    <p class="navbar__user-hname">
                        Julita Gomez
                    </p>
                </div>

                <div class="navbar__user-container">
                    <img
                        src="/static/images/julita.jpg"
                        alt=""
                        class="navbar__user-photo"
                    />
                </div>
                    <h3 class="navbar__user-name">
                    Julita Gomez
                    </h3>
            </div>
        </div>

        <header class="header">
            <div class="header__background">
                <img
                    src="/static/images/hero.jpg"
                    alt=""
                    class="header__background-img"
                />
            </div>

            <div class="header__content">
                <h3 class="header__content-type">
                    Playlist
                </h3>
                <h1 class="header__content-title">
                    Top songs <br/> <span class="header__content-title--spacing">of the world</span>
                </h1>
                <h3 class="header__content-desc">
                    Popular songs of Dua Lipa and many many others
                </h3>
            </div>
        </header>

        <div class="options">
            <img
                src="/static/icons/play.png"
                alt="Play button"
                class="options__play"
            />
            <img
                src="/static/icons/heart.png"
                alt="Favourite songs"
                class="options__favourites"
            />
            <img
                src="/static/icons/menu-dots.png"
                alt="Menu icon"
                class="options__menu"
            />
        </div>

        <main class="main" id="main">
        </main>

        <footer class="footer">
            <div class="footer__nav">
                <div class="footer__nav-column">
                    <h2 class="footer__nav-title">
                        Business
                    </h2>
                    <a href="#" class="footer__nav-link">
                        Information
                    </a>
                    <a href="#" class="footer__nav-link">
                        Work
                    </a>
                    <a href="#" class="footer__nav-link">
                        Address
                    </a>
                </div>

                <div class="footer__nav-column">
                    <h2 class="footer__nav-title">
                        Society
                    </h2>
                    <a href="#" class="footer__nav-link">
                        Advertisement
                    </a>
                    <a href="#" class="footer__nav-link">
                        Investors
                    </a>
                    <a href="#" class="footer__nav-link">
                        Suppliers
                    </a>
                </div>

                <div class="footer__nav-column">
                    <h2 class="footer__nav-title">
                        Useful links
                    </h2>
                    <a href="#" class="footer__nav-link">
                        Help
                    </a>
                    <a href="#" class="footer__nav-link">
                        Contact
                    </a>
                    <a href="#" class="footer__nav-link">
                        Mobile Application
                    </a>
                </div>
            </div>

            <div class="social-media">
                <div class="social-media__icon">
                    <img
                        src="/static/icons/fb.png"
                        alt="Facebook"
                        class="social-media__icon-fb"
                    />
                </div>
                <div class="social-media__icon">
                    <img
                        src="/static/icons/twitter.png"
                        alt="Facebook"
                        class="social-media__icon-twitter"
                    />
                </div>
                <div class="social-media__icon">
                    <img
                        src="/static/icons/ig.png"
                        alt="Facebook"
                        class="social-media__icon-ig"
                    />
                </div>
            </div>

            <div class="footer__stroke"></div>

            <div class="footer__copyright">
                © 2023 Spotify
            </div>

            <div class="footer__menu">
                <div class="footer__menu-container">
                    <img
                        src="/static/icons/Home.png"
                        alt="Home icon"
                        class="footer__menu-icon"
                    />
                    <p class="footer__menu-text">
                        Home
                    </p>
                </div>

                <div class="footer__menu-container">
                    <img
                        src="/static/icons/search.svg"
                        alt="Home icon"
                        class="footer__menu-icon"
                    />
                    <p class="footer__menu-text">
                        Search
                    </p>
                </div>

                <div class="footer__menu-container">
                    <img
                        src="/static/icons/Library.svg"
                        alt="Home icon"
                        class="footer__menu-icon--la"
                    />
                    <p class="footer__menu-text--la">
                        Library
                    </p>
                </div>

                <div class="footer__menu-container">
                    <img
                        src="/static/icons/Liked.svg"
                        alt="Home icon"
                        class="footer__menu-icon"
                    />
                    <p class="footer__menu-text">
                        Liked songs
                    </p>
                </div>
            </div>

        </footer>
    </div>
`

const container = document.getElementById('home-page');
container.innerHTML = html;

const main = document.getElementById('main');
const songBars = createSongBars(songs);

songBars.forEach((songBar) => {
  main.appendChild(songBar);
});

toggleActive();
toggleMenu();






