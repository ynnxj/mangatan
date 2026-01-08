<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Item } from '$lib/types/merch';

  export let data: { merch: Item[] };

  const { merch } = data;
</script>

<Window windowTitle={'Merch'}>
  <div>
    <h2>Merch</h2>
  </div>

  <!-- test render-->
  <ul class="merch-list">
    {#if merch.length > 0}
      {#each merch as item}
        <li>
          <h4>{item.name}</h4>
        </li>
      {/each}
    {:else}
      <li>No merch available</li>
    {/if}
  </ul>
</Window>
