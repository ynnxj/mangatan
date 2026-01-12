<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import CartPreview from '$lib/Cart/CartPreview.svelte';
  import type { Item, Cart } from '$lib/types/merch';

  // Props
  const { data } = $props<{ data: { merch: Item[] } }>(),
    merch = $derived(data.merch);

  // States
  let cart = $state<Cart[]>([]),
    showCategories = $state(false),
    showAddModal = $state(false);

  // Computed values
  const cartTotal = $derived.by(() =>
    cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0)
  );

  /* -------------------------------------------------------------------------- */
  /*                               Cart operators                               */
  /* -------------------------------------------------------------------------- */
  const isInStock = (item: Item) => item.in_stock ?? item.stock_count > 0;
  const addToCart = (item: Item) => {
    const existingIndex = cart.findIndex((cartItem) => cartItem.item._id === item._id);

    if (existingIndex !== -1) {
      // Increase quantity
      cart[existingIndex].quantity += 1;
    } else {
      // Add new item
      cart.push({ item, quantity: 1 });
    }

    cart = [...cart];
    showAddModal = true;
  };

  const updateQuantity = (itemId: string, updatedQuantity: number) => {
    const index = cart.findIndex((cartItem) => cartItem.item._id === itemId);

    if (index !== -1) {
      if (updatedQuantity <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity = updatedQuantity;
      }
      cart = [...cart];
    }
  };

  /* -------------------------------------------------------------------------- */
  /*                               Toggle Buttons                               */
  /* -------------------------------------------------------------------------- */
  const toggleCategoryBtn = () => (showCategories = !showCategories),
    closeAddModal = () => (showAddModal = false);

  /* -------------------------------------------------------------------------- */
  /*                                Local Storage                               */
  /* -------------------------------------------------------------------------- */
  $effect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) cart = JSON.parse(stored);
  });

  $effect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  });
</script>

<section class="merch-page">
  <button class="shopping-bag">
    <img src="src/lib/Icons/ShoppingBag.png" alt="A brown paper shopping bag" />
  </button>

  <CartPreview {cart} {cartTotal} onCartUpdate={updateQuantity} />

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
    <div>
      <button class="category" aria-expanded={showCategories} onclick={toggleCategoryBtn}
        >Category</button
      >
      {#if showCategories}
        <div class="category-list">
          <p>Apparel</p>
          <p>Accessories</p>
          <p>Albums</p>
        </div>
      {/if}
    </div>
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
            <p class="item-stock">{isInStock(item) ? 'In stock' : 'Sold out'}</p>

            <div class="add-to-cart">
              <button class="add-btn" onclick={() => addToCart(item)}>Add to Cart</button>

              {#if showAddModal}
                <div class="added-modal">
                  <p>Added!</p>

                  <div class="btn-container">
                    <button onclick={closeAddModal}>Continue shopping</button>
                    <button>Go to checkout</button>
                  </div>
                </div>
              {/if}
            </div>
          </Window>
        </li>
      {/each}
    {:else}
      <li>No merch available</li>
    {/if}
  </ul>
</section>

<style lang="scss">
  .shopping-bag {
    position: absolute;
    background: none;
    border: none;
    right: 0;
    top: 0;
    margin: 20px;

    img {
      width: 80px;
    }
  }

  .merch-page-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 80px 0 40px 0;
    border-bottom: 30px solid transparent;
    border-image: url('/src/lib/Icons/Divider.webp') 30 stretch;
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

  .added-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: white;
  }

  .sort-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    .category-list {
      position: absolute;
      padding: 10px;

      z-index: 10;
      background-color: white;

      p {
        border-bottom: 1px solid var(--win98-black);
        text-align: left;
      }
    }
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
