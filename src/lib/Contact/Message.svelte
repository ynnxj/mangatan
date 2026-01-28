<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
</script>

<!-- Message Container -->
<Window windowTitle={'A Message from Us'} width="600px">
  <div class="message-container">
    <div class="message-text">
      <p>
        Hello and thank you for visiting our website! Please, check out our social media, listen to
        our music, and leave a message if you have any questions or just want to say hi. We'll get
        back to you as soon as possible and we appreciate all the love and support.
      </p>
      <pre class="divider">
─ ⊹ ⊱ ☆ ⊰ ⊹ ─
      </pre>
    </div>

    <div class="image-container">
      <img src="/assets/images/mangatan/mangatan-bw.png" class="contact-img" alt="Band portrait" />
    </div>
  </div>
  <p class="love">xoxo Mångatan</p>
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
  }
  .love {
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: end;
    margin-top: 0;
    font-size: 1.2rem;
  }
  .divider {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }
</style>
