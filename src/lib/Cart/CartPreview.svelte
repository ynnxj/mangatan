<script lang="ts">
  import type { Cart } from '$lib/types/merch';
  import { scroll } from '$lib/utils/scroll';

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

<button class="shopping-bag" onclick={toggleCart}>
  <img src="src/lib/Icons/ShoppingBag.png" alt="A brown paper shopping bag" />
</button>

{#if isCartOpen}
  <button class="cart-overlay" onclick={toggleCart} aria-label="Close cart"></button>

  <div class="cart-preview">
    <div class="cart-preview-header">
      <h3 class="cart-preview-title">Cart</h3>
      <button class="close-btn" onclick={toggleCart}
        ><img src="src/lib/Icons/WindowIcons/CloseIcon.svg" alt="Close window button" /></button
      >
    </div>
    <div class="cart-content">
      {#if props.cart.length === 0}
        <p class="empty-text">Your cart is empty</p>
      {:else}
        <ul>
          {#each props.cart as cartItem}
            <li>
              <img
                class="item-img"
                src="/assets/images/placeholders/tote-placeholder.jpg"
                alt={cartItem.item.name}
              />
              <div>
                <p>{cartItem.item.name}</p>
                <p class="cart-item-total">
                  {cartItem.item.price} SEK × {cartItem.quantity} =
                  {cartItem.item.price * cartItem.quantity} SEK
                </p>
                <div class="cart-btn-container">
                  <button onclick={() => handleRemove(cartItem.item._id)}>-</button>
                  <span class="quantity">{cartItem.quantity}</span>
                  <button onclick={() => handleAdd(cartItem.item._id)}>+</button>
                </div>
              </div>
            </li>
          {/each}
        </ul>
        <div class="subtotal-text">
          <span class="subtotal">Subtotal: </span>
          <span>{props.cartTotal} SEK</span>
        </div>
      {/if}
    </div>
    {#if props.cart.length > 0}
      <a href="/merch/checkout" class="checkout-btn">Checkout</a>
    {/if}
  </div>
{/if}

<style lang="scss">
  .cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 20;
  }

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

  .cart-preview {
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background-color: rgb(30, 163, 168);
    z-index: 30;

    .cart-preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid blue;

      .cart-preview-title {
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 3rem;
        margin: 0;
        padding: 20px 30px;
      }

      .close-btn {
        width: 50px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 2rem;
      }
    }

    .cart-content {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;

      .empty-text {
        padding: 20px;
        font-size: 2rem;
        text-align: center;
      }

      .subtotal-text {
        font-size: 1.5rem;
        text-align: right;
        padding: 20px;

        .subtotal {
          font-weight: bold;
        }
      }

      .cart-item-total {
        font-size: 1rem;
      }
    }

    ul {
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 30px;
    }

    li {
      display: flex;
      font-family: var(--win98-font);
      flex-direction: row;
      gap: 20px;
      align-items: center;
      font-size: 1.5rem;
      border-bottom: 1px solid var(--win98-blue);
      margin-bottom: 30px;

      img {
        margin-bottom: 30px;
        width: 35%;
        border: 1px solid white;
        box-shadow: 1px 1px 20px rgb(129, 179, 180);
      }
    }

    .cart-btn-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0;
      width: 100px;
      padding: 10px;

      button {
        background: none;
        border: none;
      }
    }

    .checkout-btn {
      font-size: 2rem;
      text-decoration: none;
      color: white;
      text-shadow: 1px 1px 1px black;
      align-self: center;
      padding: 15px 30px;
      background: var(--win7-button-face);
      border-radius: 15px;
      border: 1px solid white;
      box-shadow: 1px 1px 20px rgb(129, 179, 180);
      margin-bottom: 90px;

      &:hover {
        background: var(--win7-button-hover);
      }
    }
  }
</style>
