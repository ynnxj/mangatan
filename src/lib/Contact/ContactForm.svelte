<script>
  import Window from '$lib/WindowBorder/Window.svelte';
  import Form from './Form/Form.svelte';
</script>

<Window windowTitle={'Contact Us'}>
  <h3 class="form-title">
    Send a Message
    <img src="src/lib/Icons/SmallIcons/Bubble.gif" class="bubble-gif" alt="gif" />
  </h3>
  <div>
    <Form />
  </div>
</Window>

<style lang="scss">
  .form-title {
    font-family: var(--win98-font-title);
    font-size: 2rem;
    padding: 10px;
    margin-top: 0;
    text-shadow: 1px 1px 3px var(--win98-black);
    font-weight: 500;
    background-color: var(--win98-light-gray);
  }
</style>
