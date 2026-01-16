<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import CartPreview from '$lib/Cart/CartPreview.svelte';
  import { overlayClick } from '$lib/actions/overlayClick';
  import type { Item, Cart } from '$lib/types/merch';
  import { scroll } from '$lib/utils/scroll';
  import './merch.scss';

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

  // Scroll toggle
  $effect(() => {
    scroll.toggle(showAddModal);
    return () => scroll.unlock();
  });

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
  <CartPreview {cart} {cartTotal} onCartUpdate={updateQuantity} />

  <div class="merch-page-header">
    <img
      class="merch-page-logo"
      src="/assets/images/mangatan/mangatan-logo.PNG"
      alt="Mångatan logo"
    />
    <img
      class="merch-page-title"
      src="/src/lib/Icons/Merch/GlitterTitle.gif"
      alt="Glitter merch logo"
    />
  </div>

  <div class="sort-container">
    <span>Sort by:</span>
    <button class="name">Name</button>
    <button class="price">Price</button>
    <div>
      <button class="category" onclick={toggleCategoryBtn}>Category</button>
      {#if showCategories}
        <div class="category-list" use:overlayClick={() => (showCategories = false)}>
          <ul class="categories">
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Albums</li>
          </ul>
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
                <div class="added-modal" use:overlayClick={() => (showAddModal = false)}>
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
