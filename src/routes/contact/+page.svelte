<script lang="ts">
  import Form from '$lib/Form/Form.svelte';
</script>

<section>
  <h2>Contact Us</h2>
  <div class="contact-container">
    <Form />
    <div>
      <img src="/assets/images/group-portrait-cold.jpg" class="contact-img" alt="Band portrait" />
    </div>
  </div>
</section>

<style lang="scss">
  .contact-container {
    display: flex;
    gap: 2rem;

    .contact-img {
      max-width: 500px;
      border: 2px solid var(--win98-black);
    }
  }
</style>
