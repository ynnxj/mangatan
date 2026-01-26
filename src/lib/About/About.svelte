<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import AboutBand from './Band/AboutBand.svelte';
  import Members from './Member/Members.svelte';
</script>

<Window windowTitle="About Us" width="600px">
  <AboutBand />
  <Members />
</Window>
