<script lang="ts">
  import About from '$lib/About/About.svelte';
  export let data: { news: any[]; gigs: any[] };
</script>

<About newsData={data.news} gigsData={data.gigs} />
