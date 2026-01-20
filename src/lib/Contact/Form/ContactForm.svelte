<script lang="ts">
  import ModalOverlay from '$lib/ModalOverlay/ModalOverlay.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';
  import { overlayClick } from '$lib/actions/overlayClick';
  import { scroll } from '$lib/utils/scroll';
  import './contact-form.scss';

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

<Window windowTitle={'Contact Us'}>
  <h3 class="form-title">Send a Message</h3>

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
    <ModalOverlay />

    <div class="confirm-submit-message" use:overlayClick={() => (showFeedbackModal = false)}>
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
</Window>
