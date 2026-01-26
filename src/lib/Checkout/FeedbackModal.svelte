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
      <a href="/merch">Continue</a>
      <a href="/">Back to Start</a>
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
      font-size: 3rem;
      padding: 0 0px;

      pre {
        font-size: 2rem;
        text-align: center;
      }
    }

    .feedback-text {
      font-size: 1.5rem;
      padding: 0 50px;
    }

    .links-container {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-self: end;
      padding: 10px 5px;

      a {
        padding: 10px 30px;
        font-size: 1.2rem;
        text-decoration: none;
        font-family: 'Orbitron', sans-serif;
        align-self: center;
        text-shadow: 1px 1px 2px var(--win98-black);
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-dark-gray);
        border-radius: 15px;
        background: var(--win7-button-face);
        color: white;

        &:hover {
          border: 1px solid #ecf7fd;
          box-shadow: 0 0 0 1px var(--win98-light-blue);
          background: var(--win7-button-hover);
        }
      }
    }
  }
</style>
