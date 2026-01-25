<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import SidePanel from '$lib/SideBar/SidePanel.svelte';
  import { page } from '$app/stores';

  let { children, data } = $props();

  const isLandingPage = $derived($page.url.pathname === '/'),
    isMerchPage = $derived($page.url.pathname === '/merch'),
    isCheckoutPage = $derived($page.url.pathname === '/merch/checkout');
</script>

{#if !isLandingPage && !isMerchPage && !isCheckoutPage}
  <div class="layout-container">
    <SidePanel side={'left'} />
    <main>
      {@render children()}
      <Nav />
    </main>
    <SidePanel side={'right'} news={data.news} />
  </div>
{:else if isLandingPage}
  {@render children()}
{:else}
  <main>
    {@render children()}
    <Nav />
  </main>
{/if}
