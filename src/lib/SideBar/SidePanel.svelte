<script lang="ts">
  import SpinningStar from '../Icons/SmallIcons/SpinningStar.gif';
  import './side-panel.scss';

  export let side: 'left' | 'right';
</script>

{#if side === 'left'}
  <div class="container {side}">
    <h3>Welcome Home</h3>
    <h4>Important Links</h4>
    <div class="links">
      <ul class="links-list">
        <li>
          <!-- TODO: Add actual links -->
          <img src={SpinningStar} alt="img" />
          <a href="#" target="_blank" title="Instagram">Instagram</a>
        </li>
        <li>
          <img src={SpinningStar} alt="img" />
          <a href="#" target="_blank" title="YouTube">YouTube</a>
        </li>
        <li>
          <img src={SpinningStar} alt="img" />
          <a href="#" target="_blank" title="Apple Music">Apple Music</a>
        </li>
        <li>
          <img src={SpinningStar} alt="img" />
          <a href="/spotify" target="_blank" title="Spotify">Spotify</a>
        </li>
      </ul>
    </div>
    <!-- TODO: Maybe make this into its own thing too -->
    <div class="collection">
      <img src="src/lib/Icons/WebStamps/Desktop.webp" alt="img" />
      <img src="src/lib/Icons/WebStamps/Snowflake.gif" alt="img" />
      <img src="src/lib/Icons/WebStamps/Doll.gif" alt="img" />
      <img src="src/lib/Icons/WebStamps/Cat.gif" alt="img" />
    </div>
  </div>
{:else}
  <!-- TODO: If these's time, turn this into data to render -->
  <div class="container {side}">
    <h3>News</h3>
    <h4>Highlights</h4>
    <div class="news-highlight-section">
      <p>We did an interview / live performance with Fryshuset's Radarn. Check it out!</p>
      <img src="src/lib/Icons/WebStamps/Click.webp" class="click" alt="click" />
      <img src="src/lib/Icons/SmallIcons/PointDown.webp" class="point-down" alt="pointer cursor" />
      <div class="news-digicam">
        <img src="/assets/images/digicam.png" class="digicam" alt="digicam frame" />
      </div>
    </div>

    <h4>Updates</h4>
    <ul class="news-list-section">
      <li>
        <h5>500 minuter OUT NOW!</h5>
        <p>Finally, out new single '500 minuter' is now out on spotify.</p>
        <!-- TODO: Add spotify link -->
        <a href="#">Click here to listen TODAY</a>
      </li>
      <li>
        <h5>Omg we have a new website!</h5>
        <p>
          Welcome to our brand new website!! This is a dream come true. I hope you enjoy it as much
          as we do. xoxo
        </p>
      </li>
    </ul>
  </div>
{/if}
