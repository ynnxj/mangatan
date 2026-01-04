<script lang="ts">
  import AboutBand from '$lib/About/Band/AboutBand.svelte';
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import type { Gig } from '$lib/types/index';
  import { page } from '$app/stores';

  let gigs: Gig[] = $page.data?.gigs || [];
</script>

<section>
  <AboutBand />
  <GigsList {gigs} />
</section>

<style lang="scss">
  // TEMPORARY
  // Will probably refactor
  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin: 100px;
  }
</style>
