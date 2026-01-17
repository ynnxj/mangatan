<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import CartPreview from '$lib/Cart/CartPreview.svelte';
  import { overlayClick } from '$lib/actions/overlayClick';
  import type { Item, Cart } from '$lib/types/merch';
  import { scroll } from '$lib/utils/scroll';
  import './merch.scss';
  import SortBy from './SortBy/SortBy.svelte';

  // States
  let sortBy = $state(''),
    selectedCategory = $state('all'),
    cart = $state<Cart[]>([]),
    showAddModal = $state(false);

  // Props
  const { data } = $props<{ data: { merch: Item[] } }>(),
    merch = $derived(data.merch);

  // Computed values
  const sortedMerch = $derived.by(() => {
      let items = [...merch];
      if (selectedCategory !== 'all') items = items.filter((i) => i.type === selectedCategory);
      return items.sort((a, b) =>
        sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price
      );
    }),
    cartTotal = $derived.by(() =>
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

  const closeAddModal = () => (showAddModal = false);

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

  <SortBy
    {sortBy}
    onSort={(type) => (sortBy = type)}
    onCategory={(category) => (selectedCategory = category)}
    onReset={() => {
      sortBy = '';
      selectedCategory = 'all';
    }}
  />

  <ul class="merch-list">
    {#if sortedMerch.length > 0}
      {#each sortedMerch as item}
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
                  <Window windowTitle="Success!">
                    <p>˖⟡˚Added item to Cart˚⟡˖ ࣪</p>

                    <div class="btn-container">
                      <button onclick={closeAddModal}>Continue shopping</button>
                      <button><a href="merch/checkout">Go to checkout</a></button>
                    </div>
                  </Window>
                </div>
              {/if}
            </div>
          </Window>
        </li>
      {/each}
    {:else}
      <li>
        {#if merch.length === 0}
          No merch available
        {:else if selectedCategory !== 'all'}
          No items in the "{selectedCategory}" category
        {:else}
          No merch available
        {/if}
      </li>
    {/if}
  </ul>
</section>
