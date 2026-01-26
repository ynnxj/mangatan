<script lang="ts">
  import About from '$lib/About/About.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<!-- About Page -->
<About newsData={data.news} gigsData={data.gigs} />
