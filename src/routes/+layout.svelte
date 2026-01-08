<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import SidePanel from '$lib/SideBar/SidePanel.svelte';
  import { page } from '$app/stores';

  const isLandingPage = $derived($page.url.pathname === '/');
  const isMerchPage = $derived($page.url.pathname === '/merch');

  let { children } = $props();
</script>

{#if !isLandingPage && !isMerchPage}
  <div class="layout-container">
    <SidePanel side={'left'} />
    <main>
      {@render children()}
      <Nav />
    </main>
    <SidePanel side={'right'} />
  </div>
{/if}

{#if isLandingPage}
  {@render children()}
{/if}

{#if isMerchPage}
  <main>
    {@render children()}
    <Nav />
  </main>
{/if}
