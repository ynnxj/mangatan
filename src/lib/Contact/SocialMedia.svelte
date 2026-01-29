<script>
  import Window from '$lib/WindowBorder/Window.svelte';
  import BlueAt from '$lib/Icons/Gifs/BlueAt.gif';
  import { socialMedia } from '$lib/data/socialMedia';
</script>

<!-- Social Media Container-->
<Window windowTitle="Social Media" width="600px">
  <h4 class="social-media-title win7-title">Social Media ☆</h4>
  <div class="social-media-links">
    <!-- Links List -->
    <ul class="social-media-list">
      {#each socialMedia as item}
        <li>
          <img src={BlueAt} alt="Blue At Icon" />
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</Window>

<style lang="scss">
  // Social media container styles
  .social-media-title {
    padding: 10px;
    font-size: 2rem;
    background-color: var(--win98-white);
    background-color: var(--win98-light-gray);
  }

  .social-media-list {
    li {
      display: flex;
      gap: 5px;
      margin-bottom: 20px;
      font-size: 1.5rem;
      font-family: 'Times New Roman', Times, serif;

      img {
        width: 30px;
      }
    }
  }
</style>
