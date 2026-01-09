<script lang="ts">
  import type { Item } from '$lib/types/merch';

  const props = $props<{
    cart: Item[];
    cartTotal: number;
  }>();

  let cart = $derived(props.cart);
  let cartTotal = $derived(props.cartTotal);
</script>

<div class="cart-preview">
  <div>
    <h3>Cart</h3>

    {#if cart.length === 0}
      <p>Cart is empty</p>
    {:else}
      <ul>
        {#each cart as item}
          <li>
            <img
              class="item-img"
              src="/assets/images/placeholders/tote-placeholder.jpg"
              alt={item.name}
            />
            <div>
              {item.name}: {item.price} SEK

              <div class="cart-btn-container">
                <button>+</button>
                <input type="number" min="0" />
                <button>-</button>
                <button class="remove-btn">Remove</button>
              </div>
            </div>
          </li>
        {/each}
      </ul>

      <p>Subtotal: {cartTotal} SEK</p>
    {/if}
  </div>
  <a href="#" class="checkout-btn">Checkout</a>
</div>

<style lang="scss">
  .cart-preview {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    right: 0;
    width: 500px;
    height: 100%;
    background-color: rgb(30, 163, 168);
    padding: 50px;
    z-index: 30;

    h3 {
      font-family: var(--win98-font-title);
      font-size: 3rem;
      margin-top: 0;
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
        width: 50%;
        border: 1px solid white;
        box-shadow: 1px 1px 20px rgb(129, 179, 180);
      }
    }

    .cart-btn-container {
      margin: 15px 0;

      input {
        width: 30px;
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
