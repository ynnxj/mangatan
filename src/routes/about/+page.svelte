<script lang="ts">
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import About from '$lib/About/About.svelte';
  import Highlight from '$lib/About/Highlight/Highlight.svelte';
  import News from '$lib/About/News/News.svelte';
  import { isMobile } from '$lib/stores/checkMobile';

  const props = $props();

  const news = $derived(() => props.data?.news ?? []),
    gigs = $derived(() => props.data?.gigs ?? []);
</script>

<section class="about-container">
  <About />
  <Highlight />
  {#if isMobile}
    <News news={news()} />
  {/if}
  <GigsList gigs={gigs()} />
</section>

<style lang="scss">
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
