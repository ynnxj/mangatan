<script lang="ts">
  import type { Cart } from '$lib/types/merch';

  // Props
  const props = $props<{
    cart: Cart[];
    cartTotal: number;
    onCartUpdate?: (itemId: string, quantity: number) => void;
  }>();

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

<div class="cart-preview">
  <h3>Cart</h3>
  <div class="cart-content">
    {#if props.cart.length === 0}
      <p>Cart is empty</p>
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
              <div class="quantity-controls">
                <button onclick={() => handleRemove(cartItem.item._id)}>-</button>
                <span class="quantity">{cartItem.quantity}</span>
                <button onclick={() => handleAdd(cartItem.item._id)}>+</button>
              </div>
              <p class="item-total">
                {cartItem.item.price} SEK × {cartItem.quantity} =
                {cartItem.item.price * cartItem.quantity} SEK
              </p>
            </div>
          </li>
        {/each}
      </ul>

      <p>Subtotal: {props.cartTotal} SEK</p>
    {/if}
  </div>
  <a href="#" class="checkout-btn">Checkout</a>
</div>

<style lang="scss">
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

    h3 {
      font-family: var(--win98-font-title);
      font-size: 3rem;
      margin-top: 0;
    }

    .cart-content {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
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

      input {
        width: 30px;
        background: none;
        border: none;
        text-align: center;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .cart-item-price {
        text-align: end;
      }
    }

    .remove-btn {
      color: white;
      text-shadow: 1px 1px 1px black;
      background: var(--win7-button-face);
      border-radius: 5px;
      border: 1px solid white;
      box-shadow: 1px 1px 20px rgb(129, 179, 180);

      &:hover {
        background: var(--win7-button-hover);
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
      margin: 30px;

      &:hover {
        background: var(--win7-button-hover);
      }
    }
  }
</style>
