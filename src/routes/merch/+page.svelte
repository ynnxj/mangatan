<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import type { Item } from '$lib/types/merch';

  export let data: { merch: Item[] };

  const isInStock = (item: Item) => item.in_stock ?? item.stock_count > 0,
    { merch } = data;

  let showCategories = false;

  const toggle = () => {
    showCategories = !showCategories;
  };
</script>

<section>
  <div class="merch-page-header">
    <img
      class="merch-page-logo"
      src="/assets/images/mangatan/mangatan-logo.PNG"
      alt="Mångatan logo"
    />
    <img class="merch-page-title" src="/src/lib/Icons/GlitterTitle.gif" alt="Glitter merch logo" />
  </div>

  <div class="sort-container">
    <span>Sort by:</span>
    <button class="name">Name</button>
    <button class="price">Price</button>
    <button
      class="category"
      aria-haspopup="listbox"
      aria-expanded={showCategories}
      on:click={toggle}>Category</button
    >
    {#if showCategories}
      <div class="category-list">
        <p>Apparel</p>
        <p>Accessories</p>
        <p>Albums</p>
      </div>
    {/if}
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
  .merch-page-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 80px 0 40px 0;
    border-bottom: 30px solid transparent;
    border-image: url('/src/lib/Icons/Divider.webp') 30 repeat;
    border-image-slice: 30;
    border-image-width: 1;
    border-image-outset: 0;

    .merch-page-title {
      width: 250px;
      margin-left: 190px;
      margin-bottom: -60px;
      height: auto;
      z-index: 10;
    }

    // Maybe fix this later
    .merch-page-logo {
      filter: invert(100%);
      width: 500px;
      margin-right: -360px;
      margin-bottom: -60px;
      z-index: 10;
    }
  }

  .sort-container {
    text-align: end;
  }

  .merch-list {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;

    .item-img {
      width: 100%;
    }
  }
</style>
