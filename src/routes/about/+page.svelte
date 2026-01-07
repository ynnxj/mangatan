<script lang="ts">
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import type { Gig } from '$lib/types/gigs';
  import { page } from '$app/stores';
  import About from '$lib/About/About.svelte';

  let gigs: Gig[] = $page.data?.gigs || [];
</script>

<section class="about-container">
  <About />
  <GigsList {gigs} />
</section>

<style lang="scss">
  .about-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
