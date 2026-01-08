<script lang="ts">
  import SpinningStar from '../Icons/SmallIcons/SpinningStar.gif';
  import { webStamps } from '../data/webStamps';
  import './side-panel.scss';

  export let side: 'left' | 'right';
</script>

{#if side === 'left'}
  <div class="panel-container {side}">
    <h3 class="panel-title">Welcome</h3>

    <h4 class="panel-under-title">Important Links</h4>
    <div class="links">
      <ul class="links-list">
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a href="https://www.instagram.com/mangatanband/" target="_blank" title="Instagram"
            >Instagram</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://www.youtube.com/channel/UCs3M4AnSaBZ8AiqLlUD4q5w"
            target="_blank"
            title="YouTube">YouTube</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://music.apple.com/se/artist/m%C3%A5ngatan/1462652734"
            target="_blank"
            title="Apple Music">Apple Music</a
          >
        </li>
        <li>
          <img src={SpinningStar} alt="list-star" />
          <a
            href="https://open.spotify.com/artist/04sRSWXovcYM8oSfApH4a6"
            target="_blank"
            title="Spotify">Spotify</a
          >
        </li>
      </ul>
    </div>

    <div class="collection">
      {#each webStamps as stamp}
        <img src={stamp.src} alt={stamp.alt} />
      {/each}
    </div>
  </div>
{:else}
  <!--MOCK-->
  <!-- TODO: If these's time, turn News into data to render -->
  <div class="panel-container {side}">
    <h3 class="panel-title">News</h3>

    <h4 class="panel-under-title">Updates</h4>
    <ul class="news-list-section">
      <li>
        <h5 class="news-title">500 minuter OUT NOW!</h5>
        <p>Finally, out new single '500 minuter' is now out on spotify.</p>
        <a
          href="https://open.spotify.com/track/484HRV0bKybqTmfqNwEyVq?si=fe6b1c8a8f7841d5"
          target="_blank"
          title="Spotify">Click here to listen TODAY</a
        >
      </li>
      <li>
        <h5 class="news-title">500 minuter OUT NOW!</h5>
        <p>Finally, out new single '500 minuter' is now out on spotify.</p>
        <a
          href="https://open.spotify.com/track/484HRV0bKybqTmfqNwEyVq?si=fe6b1c8a8f7841d5"
          target="_blank"
          title="Spotify">Click here to listen TODAY</a
        >
      </li>
      <li>
        <h5 class="news-title">Omg we have a new website!</h5>
        <p>
          Welcome to our brand new website!! This is a dream come true. I hope you enjoy it as much
          as we do. xoxo
        </p>
      </li>
    </ul>
    <div class="highlight">
      <img src="src/lib/Icons/WebStamps/Click.webp" class="click" alt="click" />
      <img src="src/lib/Icons/SmallIcons/PointDown.webp" class="point" alt="pointer cursor" />
      <div class="highlight-wmp">
        <a href="https://www.youtube.com/watch?v=zH0dspyWQGE" title="YouTube" target="_blank">
          <img src="src/lib/Icons/Frames/Digicam.png" class="wmp" alt="wmp frame" />
        </a>
      </div>
    </div>
  </div>
{/if}
