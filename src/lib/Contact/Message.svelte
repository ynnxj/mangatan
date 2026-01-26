<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import sparkleFilter from '$lib/Icons/Frames/SparkleFilter.gif';
</script>

<!-- Message Container -->
<Window windowTitle={'A Message from Us'} width="600px">
  <div class="message-container">
    <div class="message-text">
      <p>
        Please visit us on social media or leave a message if you have any questions or just want to
        say hi, and we'll get back to you as soon as possible. We appreciate all the love and
        support!
      </p>
      <pre class="love-cat">
  ∧,,,∧
( ̳• · • ̳)
/   づ♡ We love you
          </pre>
    </div>

    <div class="image-container">
      <img src={sparkleFilter} class="sparkle" alt="sparkle" />
      <img
        src="/assets/images/mangatan/group-half-cold.jpg"
        class="contact-img"
        alt="Band portrait"
      />
    </div>
  </div>
</Window>

<style lang="scss">
  // Message container styles
  .message-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .message-text {
      display: flex;
      flex-direction: column;
      padding: 10px 20px 0 20px;
      background-color: var(--win98-light-gray);
    }

    .contact-img {
      max-width: 100%;
      border: 1px solid var(--win98-black);
    }

    .sparkle {
      position: absolute;
      width: 100%;
      height: auto;
      object-fit: cover;
      filter: grayscale(100%);
    }
  }
</style>
