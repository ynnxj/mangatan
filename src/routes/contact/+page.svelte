<script lang="ts">
  import Form from '$lib/Form/Form.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';
  import instagram from '$lib/Icons/instagram.gif';
  import youtube from '$lib/Icons/youtube.png';
  import spotify from '$lib/Icons/spotify.gif';
</script>

<!--TODO: Fix class for Window. This is a v messy solution -->
<section>
  <div class="contact-container">
    <div class="left-column">
      <Window windowTitle={'Contact Us'}>
        <h3 class="form-title">Send a Message</h3>
        <Form />
      </Window>

      <div class="social-media-window">
        <Window windowTitle={'Follow Us!'}>
          <h3 class="social-media-title">⊹₊ ˚‧︵‿₊୨୧₊‿︵‧ ˚ ₊⊹ Social Media .ೃ࿔*:･</h3>
          <div class="social-media-container">
            <div class="stamps">
              <a href="https://www.instagram.com/mangatanband/" title="Instagram" target="_blank"
                ><img src={instagram} alt="instagram icon" /></a
              >
              <a
                href="https://open.spotify.com/artist/04sRSWXovcYM8oSfApH4a6"
                title="Spotify"
                target="_blank"><img src={spotify} alt="spotify icon" /></a
              >
              <a
                href="https://www.youtube.com/channel/UCs3M4AnSaBZ8AiqLlUD4q5w"
                title="YouTube"
                target="_blank"><img src={youtube} alt="youtube icon" /></a
              >
            </div>
          </div>
        </Window>
      </div>
    </div>

    <Window windowTitle={'A Message'}>
      <div class="right">
        <div class="text">
          <pre class="cat">
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡴⣆⠀⠀⠀⠀⠀⣠⡀⠀⠀⠀⠀⠀⠀⣼⣿⡗⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠀⠘⠷⠶⠶⠶⠾⠉⢳⡄⠀⠀⠀⠀⠀⣧⣿⠀⠀⠀⠀⠀
⠀⠀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣤⣤⣤⣤⣤⣿⢿⣄⠀⠀⠀⠀
⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠙⣷⡴⠶⣦
⠀⠀⢱⡀⠀⠉⠉⠀⠀⠀⠀⠛⠃⠀⢠⡟⠀⠀⠀⢀⣀⣠⣤⠿⠞⠛⠋
⣠⠾⠋⠙⣶⣤⣤⣤⣤⣤⣀⣠⣤⣾⣿⠴⠶⠚⠋⠉⠁⠀⠀⠀⠀⠀⠀
⠛⠒⠛⠉⠉⠀⠀⠀⣴⠟⢃⡴⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </pre>
          <p>
            Please visit us on social media or leave a message if you have any questions or just
            want to say hi, and we'll get back to you as soon as possible.
          </p>
          <p>We appreciate all the love and support!</p>
          <pre>
  ∧,,,∧
( ̳• · • ̳)
/   づ♡ We love you
          </pre>
          <p>Best wishes, Mångatan.</p>
        </div>
        <div class="image-container">
          <img src="/assets/images/sparkles-sparkle.gif" class="sparkle" alt="sparkle" />
          <img src="/assets/images/group-full-warm.jpg" class="contact-img" alt="Band portrait" />
        </div>
      </div>
    </Window>
  </div>
</section>

<style lang="scss">
  // TODO: refactor styles,
  // this is way too long
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

  h3 {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
  }

  .left-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .social-media-window {
    margin-left: -100px;
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

  .contact-container {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    .contact-img {
      max-width: 100%;
      border: 1px solid var(--win98-black);
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 20px;
    border: 1px solid rgb(0, 0, 0);
    background-color: var(--win98-light-gray);
  }

  .cat {
    color: white;
    position: absolute;
    left: 5%;
    bottom: 0;
  }

  .sparkle {
    position: absolute;
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
  }
</style>
