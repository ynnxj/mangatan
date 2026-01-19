<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';

  import SidePanel from '$lib/SideBar/SidePanel.svelte';
  import { page } from '$app/stores';

  const isLandingPage = $derived($page.url.pathname === '/');
  const isMerchPage = $derived($page.url.pathname === '/merch');
  const isCheckoutPage = $derived($page.url.pathname === '/merch/checkout');

  let { children, data } = $props();
</script>

<!-- TODO: Maybe fix this eventually. It's looking a bit messy atm -->
{#if !isLandingPage && !isMerchPage && !isCheckoutPage}
  <div class="layout-container">
    <SidePanel side={'left'} />
    <main>
      {@render children()}
      <Nav />
    </main>
    <SidePanel side={'right'} news={data.news} />
  </div>
{/if}

{#if isLandingPage}
  {@render children()}
{/if}

{#if isMerchPage || isCheckoutPage}
  <main>
    {@render children()}
    <Nav />
  </main>
{/if}
