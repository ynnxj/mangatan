<script>
  import Window from '$lib/WindowBorder/Window.svelte';
  import BlueAt from '$lib/Icons/Gifs/BlueAt.gif';
</script>

<Window windowTitle="Social Media" width="600px">
  <h4 class="social-media-title">Social Media</h4>
  <div class="social-media-links">
    <ul class="social-media-list">
      <li>
        <img src={BlueAt} alt="A spinning blue at sign" />
        <a href="https://www.instagram.com/mangatanband/" target="_blank" title="Instagram"
          >Instagram</a
        >
      </li>
      <li>
        <img src={BlueAt} alt="A spinning blue at sign" />
        <a
          href="https://www.youtube.com/channel/UCs3M4AnSaBZ8AiqLlUD4q5w"
          target="_blank"
          title="YouTube">YouTube</a
        >
      </li>
      <li>
        <img src={BlueAt} alt="A spinning blue at sign" />
        <a
          href="https://music.apple.com/se/artist/m%C3%A5ngatan/1462652734"
          target="_blank"
          title="Apple Music">Apple Music</a
        >
      </li>
      <li>
        <img src={BlueAt} alt="A spinning blue at sign" />
        <a
          href="https://open.spotify.com/artist/04sRSWXovcYM8oSfApH4a6"
          target="_blank"
          title="Spotify">Spotify</a
        >
      </li>
    </ul>
  </div>
</Window>

<style lang="scss">
  .social-media-title {
    padding: 10px;
    margin-top: 0;
    font-size: 2rem;
    font-family: var(--win98-font-title);
    background-color: var(--win98-white);
    text-shadow: 1px 1px 3px var(--win98-black);
    font-weight: 500;
    background-color: var(--win98-light-gray);
  }
  .social-media-list {
    li {
      display: flex;
      gap: 5px;
      margin-bottom: 20px;
      font-size: 2rem;
      font-family: 'Times New Roman', Times, serif;

      img {
        width: 30px;
      }
    }
  }
</style>
