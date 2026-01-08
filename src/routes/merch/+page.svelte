<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Item } from '$lib/types/merch';

  export let data: { merch: Item[] };
  const isInStock = (item: Item) => item.in_stock ?? item.stock_count > 0;
  const { merch } = data;
</script>

<section>
  <div>
    <h2>Merch</h2>
  </div>
  <ul class="merch-list">
    {#if merch.length > 0}
      {#each merch as item}
        <li>
          <Window windowTitle={'Item.exe'}>
            <img
              class="item-img"
              src="/assets/images/placeholders/tote-placeholder.jpg"
              alt={item.name}
            />
            <h3 class="item-name">{item.name}</h3>
            <p class="item-desc">{item.description}</p>
            <p class="item-price">{item.price}SEK</p>
            <p class="item-stock">
              {#if isInStock(item)}
                In stock
              {:else}
                Sold out
              {/if}
            </p>
          </Window>
        </li>
      {/each}
    {:else}
      <li>No merch available</li>
    {/if}
  </ul>
</section>

<style lang="scss">
  .merch-list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;

    .item-img {
      width: 100%;
    }
  }
</style>
