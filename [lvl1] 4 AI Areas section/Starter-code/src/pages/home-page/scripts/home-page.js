/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.
import '../styles/home-page.scss'

const html = `<div class="component-wrapper">
  <header class="header-container">
    <h1 class="header-container__title">
      AI plays a significant role in our daily lives
    </h1>

    <h3 class="header-container__desc">
      The goal of AI is to create systems that can operate autonomously,
      making decisions and taking actions based on their own understanding of the world,
      without the need for direct human input.
    </h3>
  </header>

  <main class="main-container">
    <div class="main-container__top-row">
      <div class="tile">
        <img
          src="/static/images/mlearning.png"
          alt="icon"
          class="tile__icon"
        />
        <h2 class="tile__title">
          Machine Learning
        </h2>
        <p class="tile__desc">
          The ability of AI systems to learn from data and improve their performance
        </p>
      </div>

      <div class="tile">
        <img
          src="/static/images/cvision.png"
          alt="icon"
          class="tile__icon"
        />
        <h2 class="tile__title">
          Computer Vision
        </h2>
        <p class="tile__desc">
          The ability to process and analyze visual information, such as images and videos
        </p>
      </div>
    </div>

    <div class="main-container__bottom-row">
      <div class="tile">
        <img
          src="/static/images/nlanguage.png"
          alt="icon"
          class="tile__icon"
        />
        <h2 class="tile__title">
          Natural Language
        </h2>
        <p class="tile__desc">
          The ability of AI systems to understand, interpret, and generate human language
        </p>
      </div>

      <div class="tile">
        <img
          src="/static/images/robotics.png"
          alt="icon"
          class="tile__icon"
        />
        <h2 class="tile__title">
          Robotics
        </h2>
        <p class="tile__desc">
          Development of autonomous robots that can perform tasks without human intervention
        </p>
      </div>
    </div>
  </main>
</div>`;

const container = document.getElementById("home-page");
container.innerHTML = html;

