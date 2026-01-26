<script lang="ts">
  import GigsList from '$lib/Gigs/GigsList.svelte';
  import Highlight from '$lib/About/Highlight/Highlight.svelte';
  import News from '$lib/About/News/News.svelte';
  import { isMobile } from '$lib/stores/checkMobile';
  import Members from './Member/Members.svelte';
  import AboutBand from './Band/AboutBand.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Post } from '$lib/types/posts';
  import type { Gig } from '$lib/types/gigs';

  // Props
  const { newsData, gigsData } = $props<{ newsData: Post[]; gigsData: Gig[] }>();
</script>

<!-- About Container -->
<section class="about-container">
  <Window windowTitle="About Us" width="600px">
    <!-- About Band -->
    <AboutBand />
    <!-- About Members -->
    <Members />
  </Window>
  <!-- Highlight Video -->
  <Highlight />
  <!-- News List -->
  {#if $isMobile}
    <News news={newsData} />
  {/if}
  <!-- Gigs List -->
  <GigsList gigs={gigsData} />
</section>
