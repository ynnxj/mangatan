<script lang="ts">
  import AboutBand from '$lib/About/Band/AboutBand.svelte';
  import GigsList from '$lib/Gigs/GigsList.svelte';
</script>

<section>
  <AboutBand />
  <GigsList />
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 20px 0;
  }
</style>
