<script lang="ts">
  import { isMobile } from '$lib/stores/checkMobile';
  import ContactForm from './Form/ContactForm.svelte';
  import Message from './Message.svelte';
  import SocialMedia from './SocialMedia.svelte';
</script>

<!-- Contact Container-->
<div class="contact-container">
  <Message />
  {#if $isMobile}
    <SocialMedia />
  {/if}
  <ContactForm />
</div>
