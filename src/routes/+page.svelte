<section>
  <h1>
    <img
      class="logo"
      src="/assets/images/mangatan-logo.PNG"
      width="3405"
      height="1414"
      alt="Mångatans Logo"
    />
  </h1>

  <a href="/about">Enter</a>

  <img class="grain-effect" src="/assets/images/grain.jpg" alt="Grain Effect" />
  <!-- TODO: Change to video background later -->
  <img
    class="background-image"
    src="/assets/images/group-full-warm.jpg"
    alt="Band Portrait Full Body placeholder"
  />
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    .logo {
      position: absolute;
      filter: invert(1) drop-shadow(1px 1px 5px rgb(255, 255, 255));
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
      color: white;
      text-shadow: 1px 1px 2px black;
      border: 1px solid #f3f3f3;
      box-shadow: 0 0 0 1px #707070;
      border-radius: 50px;
      background: linear-gradient(to bottom, #f2f2f2 0%, #ebebeb 50%, #dddddd 51%, #cfcfcf 100%);
      text-decoration: none;
      z-index: 10;

      &:hover {
        border: 1px solid #ecf7fd;
        box-shadow: 0 0 0 1px #3c7fb1;
        background: linear-gradient(to bottom, #eaf6fd 0%, #d9f0fc 50%, #bee6fd 51%, #a7d9f5 100%);
      }
    }

    .background-image {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      filter: blur(3px) brightness(2) contrast(1.4) saturate(50%) hue-rotate(150deg);
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
