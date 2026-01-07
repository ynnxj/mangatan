<script lang="ts">
  import Form from '$lib/Form/Form.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';
  import Message from './Message.svelte';
  import SocialMedia from './SocialMedia.svelte';
</script>

<div class="contact-container">
  <Message />

  <Window windowTitle={'Contact Us'}>
    <h3 class="form-title">
      Send a Message
      <img src="src/lib/Icons/SmallIcons/Bubble.gif" class="bubble-gif" alt="gif" />
    </h3>
    <div>
      <Form />
    </div>
  </Window>

  <div class="social-media-window">
    <SocialMedia />
  </div>
</div>

<style lang="scss">
  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .form-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    padding: 10px;
    margin-top: 0;
    text-shadow: 1px 1px 3px var(--win98-black);
    font-weight: 500;
    background-color: var(--win98-light-gray);
  }
</style>
