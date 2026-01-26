<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import CartPreview from '$lib/Cart/CartPreview.svelte';
  import { overlayClick } from '$lib/actions/overlayClick';
  import type { Item, Cart } from '$lib/types/merch';
  import { scroll } from '$lib/utils/scroll';
  import './merch.scss';
  import SortBy from './SortBy/SortBy.svelte';
  import ModalOverlay from '$lib/ModalOverlay/ModalOverlay.svelte';
  import MerchHeader from './MerchHeader/MerchHeader.svelte';

  // State of cart
  let cart = $state<Cart[]>([]);

  // Merch data props
  const { data } = $props<{ data: { merch: Item[] } }>(),
    merch = $derived(data.merch);

  /* -------------------------------------------------------------------------- */
  /*                           Sorting and Categories                           */
  /* -------------------------------------------------------------------------- */
  let sortBy = $state(''),
    selectedCategory = $state('all');

  // Filter based on sort and category
  const sortedMerch = $derived.by(() => {
    let items = [...merch];
    if (selectedCategory !== 'all') items = items.filter((i) => i.type === selectedCategory);
    return items.sort((a, b) =>
      sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price
    );
  });

  /* -------------------------------------------------------------------------- */
  /*                               Cart Functions                               */
  /* -------------------------------------------------------------------------- */
  // Compute total price
  const cartTotal = $derived.by(() =>
    cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0)
  );

  // Check if item is in stock
  const isInStock = (item: Item) => item.in_stock ?? item.stock_count > 0;

  /**
   * Add selected item to cart
   * @param item
   */
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

  /**
   * Update item quantity in cart.
   * Add or remove.
   * @param itemId
   * @param updatedQuantity
   */
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
  /*                                Modal Toggle                                */
  /* -------------------------------------------------------------------------- */
  let showAddModal = $state(false);
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
  <!-- Cart Preview -->
  <CartPreview {cart} {cartTotal} onCartUpdate={updateQuantity} />

  <!-- Merch Page Header -->
  <MerchHeader />

  <!-- Sort and Categories -->
  <SortBy
    {sortBy}
    onSort={(type) => (sortBy = type)}
    onCategory={(category) => (selectedCategory = category)}
  />

  <!-- Merch Items List -->
  <ul class="merch-list">
    {#if sortedMerch.length > 0}
      {#each sortedMerch as item}
        <li>
          <Window windowTitle={'Item.exe'} width="400px">
            <img class="item-img" src={item.image_url} alt={item.name} />
            <h3 class="item-name">{item.name}</h3>
            <p class="item-desc">{item.description}</p>
            <p class="item-price">{item.price}SEK</p>
            <p class="item-stock">{isInStock(item) ? 'In stock' : 'Sold out'}</p>
            <!-- Add to Cart Button -->
            <div class="add-to-cart">
              <button class="add-btn" onclick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </Window>
        </li>
      {/each}
    {:else}
      <!-- Error Messages -->
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

  {#if showAddModal}
    <!-- Modal Overlay -->
    <ModalOverlay />
    <!-- Added to Cart Confrim Modal -->
    <div class="added-modal" use:overlayClick={closeAddModal}>
      <Window windowTitle={'Success!'}>
        <p>˖⟡˚Added item to Cart˚⟡˖ ࣪</p>
        <!-- Button Container -->
        <div class="btn-container">
          <button onclick={closeAddModal}>Continue shopping</button>
          <button><a href="merch/checkout">Go to checkout</a></button>
        </div>
      </Window>
    </div>
  {/if}
</section>
