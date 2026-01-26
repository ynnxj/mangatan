<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import SidePanel from '$lib/SideBar/SidePanel.svelte';
  import { page } from '$app/stores';

  // Props
  let { children, data } = $props();

  // Determine current page
  const isLandingPage = $derived($page.url.pathname === '/'),
    isMerchPage = $derived($page.url.pathname === '/merch'),
    isCheckoutPage = $derived($page.url.pathname === '/merch/checkout');
</script>

<!-- About and Contact Page Layout -->
<!-- Include Side Panels and Navbar -->
{#if !isLandingPage && !isMerchPage && !isCheckoutPage}
  <div class="layout-container">
    <SidePanel side={'left'} />
    <main>
      {@render children()}
      <Nav />
    </main>
    <SidePanel side={'right'} news={data.news} />
  </div>
  <!-- Landing Page Layout -->
  <!-- Exclude Side Panels and Navbar -->
{:else if isLandingPage}
  {@render children()}
  <!-- Merch Page Layout -->
  <!-- Exclude Side Panels -->
  <!-- Include Navbar -->
{:else}
  <main>
    {@render children()}
    <Nav />
  </main>
{/if}
