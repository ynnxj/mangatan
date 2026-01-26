<!-- Start Page Container-->
<section class="start-page-container">
  <!-- Mångatan Title -->
  <h1>
    <img
      class="logo"
      src="/assets/images/mangatan/mangatan-logo.PNG"
      width="3405"
      height="1414"
      alt="Mångatans Logo"
    />
  </h1>

  <!-- Enter Button -->
  <a class="enter-btn" href="/about">Enter</a>

  <!-- Background Video -->
  <video class="background-video" autoplay loop muted>
    <source src="/assets/videos/video1.mp4" type="video/mp4" />
  </video>
</section>

<style lang="scss">
  // Start page styles
  .start-page-container {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    z-index: 100;

    // Mångatan title logo
    .logo {
      position: absolute;
      filter: invert(1);
      width: 1000px;
      max-width: 80vw;
      height: auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      opacity: 0;
      animation: fadeIn 1s ease-in forwards;
    }

    // Enter button
    .enter-btn {
      position: absolute;
      font-family: 'Times New Roman', Times, serif;
      top: 50%;
      left: 65%;
      font-size: 4em;
      color: var(--win98-white);
      z-index: 10;
      opacity: 0;
      animation: fadeIn 3s ease-in forwards;

      &:hover {
        color: var(--win98-accent-pink);
        font-style: italic;
        text-decoration: underline;
      }
    }

    // Background video
    .background-video {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      filter: sepia(100%) hue-rotate(180deg) saturate(350%) brightness(60%) contrast(80%);
    }
  }

  // Fade in animations
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  // Responsive styles
  @media (max-width: 768px) {
    // Mångatan title logo
    .start-page-container .logo {
      top: 15%;
    }

    // Enter button
    .start-page-containeron .enter-btn {
      top: 85%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
