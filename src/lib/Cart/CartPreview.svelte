<script lang="ts">
  import type { Cart } from '$lib/types/merch';
  import { scroll } from '$lib/utils/scroll';
  import { overlayClick } from '$lib/actions/overlayClick';
  import paperBag from '$lib/Icons/Merch/ShoppingBag.png';
  import closeBtn from '$lib/Icons/WindowIcons/CloseIcon.svg';
  import './cart-preview.scss';
  import ModalOverlay from '$lib/ModalOverlay/ModalOverlay.svelte';

  // Props
  const props = $props<{
    cart: Cart[];
    cartTotal: number;
    onCartUpdate?: (itemId: string, quantity: number) => void;
  }>();

  // Preview cart toggle
  let isCartOpen = $state(false);
  const toggleCart = () => {
    isCartOpen = !isCartOpen;
  };

  // Get total in cart
  const totalItems = () => props.cart.reduce((sum: number, item: Cart) => sum + item.quantity, 0);

  // Scroll toggle
  $effect(() => {
    scroll.toggle(isCartOpen);
    return () => scroll.unlock();
  });

  /* -------------------------------------------------------------------------- */
  /*                               Handle Quantity                              */
  /* -------------------------------------------------------------------------- */
  const handleAdd = (itemId: string) => {
    const cartItem = props.cart.find((item: Cart) => item.item._id === itemId);
    if (cartItem && props.onCartUpdate) {
      props.onCartUpdate(itemId, cartItem.quantity + 1);
    }
  };

  const handleRemove = (itemId: string) => {
    const cartItem = props.cart.find((item: Cart) => item.item._id === itemId);
    if (cartItem && props.onCartUpdate) {
      props.onCartUpdate(itemId, cartItem.quantity - 1);
    }
  };
</script>

<!-- Shopping Bag Icon w Badge -->
<button class="shopping-bag" onclick={toggleCart}>
  <img src={paperBag} alt="A brown paper shopping bag" />
  {#if totalItems() > 0}
    <span class="cart-badge">{totalItems()}</span>
  {/if}
</button>

{#if isCartOpen}
  <!-- Modal Overlay -->
  <ModalOverlay />

  <!-- Cart Preview Sidebar-->
  <div class="cart-preview" use:overlayClick={toggleCart}>
    <div class="cart-preview-header">
      <h3 class="cart-preview-title">Cart</h3>
      <button class="close-btn" onclick={toggleCart}
        ><img src={closeBtn} alt="Close window button" /></button
      >
    </div>
    <!-- Cart Content -->
    <div class="cart-content">
      {#if props.cart.length === 0}
        <p class="empty-text">Your cart is empty</p>
      {:else}
        <!-- Items in Cart List -->
        <ul>
          {#each props.cart as cartItem}
            <li>
              <img class="item-img" src={cartItem.item.image_url} alt={cartItem.item.name} />
              <div>
                <p class="item-name">{cartItem.item.name}</p>
                <p class="cart-item-total">
                  {cartItem.item.price} SEK × {cartItem.quantity} =
                  {cartItem.item.price * cartItem.quantity} SEK
                </p>
                <div class="cart-btn-container">
                  <button onclick={() => handleRemove(cartItem.item._id)}>−</button>
                  <span class="quantity">{cartItem.quantity}</span>
                  <button onclick={() => handleAdd(cartItem.item._id)}>+</button>
                </div>
              </div>
            </li>
          {/each}
        </ul>
        <!-- Subtotal Section -->
        <div class="subtotal-text">
          <span class="subtotal">Subtotal: </span>
          <span>{props.cartTotal} SEK</span>
        </div>
      {/if}
    </div>
    {#if props.cart.length > 0}
      <!-- Checkout Button -->
      <a href="/merch/checkout" class="checkout-btn win7-btn">Checkout</a>
    {/if}
  </div>
{/if}
