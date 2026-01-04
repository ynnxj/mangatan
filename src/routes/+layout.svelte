<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/Nav/Nav.svelte';
  import SidePanel from '$lib/SideBar/SidePanel.svelte';

  let { children } = $props();
</script>

<SidePanel side={'left'} />

<main>
  {@render children()}
  <Nav />
</main>

<SidePanel side={'right'} />
