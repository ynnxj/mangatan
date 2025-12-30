<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import Header from '$lib/Header/Header.svelte';
  import Footer from '$lib/Footer/Footer.svelte';

  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
  <Nav />
</main>

<Footer />
