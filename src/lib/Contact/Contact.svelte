<script lang="ts">
  import ContactForm from './ContactForm.svelte';
  import Message from './Message.svelte';
  import SocialMedia from './SocialMedia.svelte';
</script>

<div class="contact-container">
  <Message />
  <ContactForm />
  <SocialMedia />
</div>

<style lang="scss">
  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
