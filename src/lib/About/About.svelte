<script lang="ts">
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import Highlight from '$lib/About/Highlight/Highlight.svelte';
  import News from '$lib/About/News/News.svelte';
  import { isMobile } from '$lib/stores/checkMobile';
  import Members from './Member/Members.svelte';
  import AboutBand from './Band/AboutBand.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';

  const { newsData, gigsData } = $props<{ newsData: any[]; gigsData: any[] }>();
</script>

<section class="about-container">
  <Window windowTitle="About Us" width="600px">
    <AboutBand />
    <Members />
  </Window>
  <Highlight />
  {#if $isMobile}
    <News news={newsData} />
  {/if}
  <GigsList gigs={gigsData} />
</section>
