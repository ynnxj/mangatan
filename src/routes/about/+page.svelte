<script lang="ts">
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import type { Gig } from '$lib/types/gigs';
  import { page } from '$app/stores';
  import About from '$lib/About/About.svelte';
  import Highlight from '$lib/About/Highlight/Highlight.svelte';

  let gigs: Gig[] = $page.data?.gigs || [];
</script>

<section class="about-container">
  <About />
  <Highlight />
  <GigsList {gigs} />
</section>

<style lang="scss">
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
