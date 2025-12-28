<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<nav>
  <a href="/">home</a>
  <a href="/contact">contact</a>
  <a href="/merch">merch</a>
</nav>

{@render children()}
