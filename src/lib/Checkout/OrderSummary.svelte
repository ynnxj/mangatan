<script lang="ts">
  import type { Cart } from '$lib/types/merch';
  import Window from '$lib/WindowBorder/Window.svelte';
  import { onMount } from 'svelte';

  let cart = $state<Cart[]>([]);
  let cartTotal = $state(0);
  const shippingCost = 49;
  const totalWithShipping = $derived.by(() => cartTotal + shippingCost);

  onMount(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      cart = JSON.parse(stored);
      cartTotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
    }
  });
</script>

<Window windowTitle="Items.exe" width="400px">
  <div class="order-summary">
    <h3 class="order-title">Your Order</h3>
    <ul class="order-item-list">
      {#each cart as item}
        <li class="order-item">
          <img class="item-img" src={item.item.image_url} alt={item.item.name} />
          <div>
            <h4 class="item-name">{item.item.name}</h4>
            <p>{item.quantity} × {item.item.price} SEK</p>
            <p>{item.item.price * item.quantity} SEK</p>
          </div>
        </li>
      {/each}
    </ul>

    <div class="total-summary">
      <div class="order-total">
        <div class="subtotal">
          <span class="strong">Subtotal:</span>
          <span>{cartTotal} SEK</span>
        </div>
        <div class="shipping">
          <span class="strong">Shipping:</span>
          <span>{shippingCost} SEK</span>
        </div>
        <div class="total">
          <span class="strong">Total:</span>
          <span>{totalWithShipping} SEK</span>
        </div>
      </div>
      <a href="/merch">Edit Cart</a>
    </div>
  </div>
</Window>

<style lang="scss">
  .order-summary {
    .order-title {
      font-size: 2rem;
      margin: 0;
    }

    .order-item {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      border: 1px solid black;

      .item-name {
        font-size: 1.5rem;
      }

      img {
        width: 150px;
        align-self: center;
        padding: 5px;
      }
    }

    .total-summary {
      display: flex;
      justify-content: space-between;
      padding: 10px 5px 30px 5px;

      .order-total {
        .total {
          font-size: 1.5rem;
        }
        .strong {
          font-weight: bold;
        }
      }

      a {
        padding: 10px 30px;
        font-size: 1.2rem;
        font-family: 'Orbitron', sans-serif;
        align-self: center;
        text-shadow: 1px 1px 2px var(--win98-black);
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-dark-gray);
        border-radius: 15px;
        background: var(--win7-button-face);
        color: white;
        text-decoration: none;

        &:hover {
          border: 1px solid #ecf7fd;
          box-shadow: 0 0 0 1px var(--win98-light-blue);
          background: var(--win7-button-hover);
        }
      }
    }
  }
</style>
