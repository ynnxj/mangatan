<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import { scroll } from '$lib/utils/scroll';

  let showFeedbackModal = $state(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    formElement.reset();

    showFeedbackModal = true;
  };

  // Scroll toggle
  $effect(() => {
    scroll.toggle(showFeedbackModal);
    return () => scroll.unlock();
  });
</script>

<!--TODO: Add accessibility attributes to all form elements 
and ensure proper labeling for screen readers -->
<form method="post" action="/contact" onsubmit={handleSubmit}>
  <label for="name">Name:</label>
  <input type="text" aria-label="Name" placeholder="Full name" required />

  <label for="email">Email:</label>
  <input type="email" aria-label="Email" name="email" placeholder="Email adress" required />

  <label for="message">Message:</label>
  <textarea aria-label="Message" placeholder="Write something..." required></textarea>

  <div class="contact-buttons">
    <button type="submit">Send</button>
    <button type="reset">Reset</button>
  </div>
</form>

{#if showFeedbackModal}
  <button
    class="confirm-overlay"
    onclick={() => (showFeedbackModal = false)}
    aria-label="Confirm submit message overlay"
  ></button>

  <div class="confirm-submit-message">
    <!-- TODO: Maybe make this a reusable component -->
    <Window windowTitle="Message Sent">
      <div class="submit-modal">
        <div class="submit-title">
          <h4>Thank you for your message!</h4>
          <pre>⊹₊ ˚‧︵‿₊୨୧₊‿︵‧˚ ₊⊹</pre>
        </div>

        <div class="submit-text">
          <p>Well get back to you as soon as possible!</p>
          <p>Love, Mångatan</p>
        </div>
      </div>
    </Window>
  </div>
{/if}

<style lang="scss">
  .confirm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 20;
  }

  .confirm-submit-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    display: flex;
    flex-direction: column;
    align-items: center;

    .submit-title {
      font-size: 3rem;
      padding: 0 0px;

      pre {
        font-size: 2rem;
        text-align: center;
      }
    }
  }

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1em;
      font-family: 'Orbitron', sans-serif;
      font-weight: 500;
    }

    textarea {
      height: 100px;
    }

    input,
    textarea {
      margin-top: 5px;
      padding: 10px;
      font-size: 1em;
      width: 100%;
      font-family: inherit;
    }

    .contact-buttons {
      display: flex;
      justify-content: end;
      gap: 15px;
      margin: 15px 0;

      button {
        padding: 10px 30px;
        font-size: 1.2rem;
        font-family: 'Orbitron', sans-serif;
        align-self: center;
        text-shadow: 1px 1px 2px var(--win98-black);
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-dark-gray);
        border-radius: 15px;
        background: var(--win7-button-face);
        color: var(--win98-white);

        &:hover {
          border: 1px solid var(--win98-white);
          box-shadow: 0 0 0 1px var(--win98-light-blue);
          background: var(--win7-button-hover);
        }
      }
    }
  }
</style>
