<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<Nav />
