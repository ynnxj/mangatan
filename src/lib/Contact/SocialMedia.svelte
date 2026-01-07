<script>
  import Window from '$lib/WindowBorder/Window.svelte';
  import Instagram from '$lib/Icons/WebStamps/Instagram.gif';
  import Youtube from '$lib/Icons/WebStamps/Youtube.png';
  import Spotify from '$lib/Icons/WebStamps/Spotify.gif';
</script>

<Window windowTitle={'Follow Us!'}>
  <h3 class="social-media-title">⊹₊ ˚‧︵‿₊୨୧₊‿︵‧ ˚ ₊⊹ Social Media .ೃ࿔*:･</h3>
  <div class="social-media-container">
    <div class="stamps">
      <a href="https://www.instagram.com/mangatanband/" title="Instagram" target="_blank"
        ><img src={Instagram} alt="instagram icon" /></a
      >
      <a
        href="https://open.spotify.com/artist/04sRSWXovcYM8oSfApH4a6"
        title="Spotify"
        target="_blank"><img src={Spotify} alt="spotify icon" /></a
      >
      <a
        href="https://www.youtube.com/channel/UCs3M4AnSaBZ8AiqLlUD4q5w"
        title="YouTube"
        target="_blank"><img src={Youtube} alt="youtube icon" /></a
      >
    </div>
  </div>
</Window>

<style lang="scss">
  .social-media-title {
    font-family: 'Orbitron', sans-serif;
    text-shadow: 1px 1px 5px rgb(255, 255, 255);
    padding: 10px;
    text-align: center;
    color: white;
    box-shadow: 1px 1px 5px rgb(49, 49, 49);
    background-color: rgb(49, 49, 49);
    margin: 0;
  }

  .social-media-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(49, 49, 49);
    background-color: var(--win98-light-gray);
    padding: 10px;

    .stamps {
      display: flex;
      gap: 20px;
    }
  }
</style>
