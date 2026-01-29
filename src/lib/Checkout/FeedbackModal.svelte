<script>
  import Window from '$lib/WindowBorder/Window.svelte';
</script>

<!-- Feedback Modal -->
<Window windowTitle="Order Confirmed">
  <div class="feedback-modal">
    <div class="feedback-title">
      <h4>Thank you for your order!</h4>
      <pre>⊹₊ ˚‧︵‿₊୨୧₊‿︵‧˚ ₊⊹</pre>
    </div>

    <div class="feedback-text">
      <p>Order conformation has been sent to your email adress.</p>
      <p>Love, Mångatan</p>
    </div>

    <div class="links-container">
      <a href="/merch" class="win98-btn">Continue</a>
      <a href="/" class="win98-btn">Back to Start</a>
    </div>
  </div>
</Window>

<style lang="scss">
  // Feedback Modal Styles
  .feedback-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;

    .feedback-title {
      font-size: 2rem;
      padding: 0 0px;

      pre {
        font-size: 2rem;
        text-align: center;
      }
    }

    .feedback-text {
      font-size: 1rem;
      padding: 0 50px;
    }

    .links-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-self: end;
      padding: 10px 5px;
    }
  }
</style>
