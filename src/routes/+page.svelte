<section>
  <h1>
    <img
      class="logo"
      src="/assets/images/mangatan/mangatan-logo.PNG"
      width="3405"
      height="1414"
      alt="Mångatans Logo"
    />
  </h1>

  <a href="/about">Enter</a>

  <img class="grain-effect" src="/assets/images/background/grain.jpg" alt="Grain Effect" />
  <video class="background-video" autoplay loop muted>
    <source src="/assets/videos/video1.mp4" type="video/mp4" />
  </video>
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: 100;

    .logo {
      position: absolute;
      filter: invert(1) drop-shadow(1px 1px 5px var(--win98-white));
      width: 1000px;
      max-width: 80vw;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    a {
      position: absolute;
      top: 60%;
      left: 70%;
      padding: 10px 40px;
      font-size: 2em;
      color: var(--win98-white);
      text-shadow: 1px 1px 2px var(--win98-black);
      border: 1px solid var(--win98-white);
      box-shadow: 0 0 0 1px var(--win98-dark-gray);
      border-radius: 50px;
      background: var(--win7-button-face);
      text-decoration: none;
      z-index: 10;

      &:hover {
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-light-blue);
        background: var(--win7-button-hover);
      }
    }

    .background-video {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      filter: sepia(100%) hue-rotate(180deg) saturate(500%) brightness(50%) contrast(70%);
    }

    .grain-effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      opacity: 0.2;
      z-index: 1;
      filter: brightness(5) contrast(0.5) opacity(0.6);
    }
  }
</style>
