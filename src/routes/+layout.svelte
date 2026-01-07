<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import SidePanel from '$lib/SideBar/SidePanel.svelte';
  import { page } from '$app/stores';

  const isLandingPage = $derived($page.url.pathname === '/');

  let { children } = $props();
</script>

{#if !isLandingPage}
  <SidePanel side={'left'} />
  <main>
    {@render children()}
    <Nav />
  </main>
  <SidePanel side={'right'} />
{/if}

{#if isLandingPage}
  {@render children()}
{/if}
