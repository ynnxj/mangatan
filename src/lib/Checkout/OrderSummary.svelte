<script lang="ts">
  import type { Cart } from '$lib/types/merch';
  import Window from '$lib/WindowBorder/Window.svelte';
  import { onMount } from 'svelte';

  // States for cart
  let cart = $state<Cart[]>([]),
    cartTotal = $state(0);

  // Shipping
  const shippingCost = 49,
    totalWithShipping = $derived.by(() => cartTotal + shippingCost);

  // Load cart from localStorage on component mount
  onMount(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      cart = JSON.parse(stored);
      cartTotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
    }
  });
</script>

<!-- Order Summary -->
<Window windowTitle="Items.exe" width="450px">
  <div class="order-summary">
    <h3 class="order-title">Your Order</h3>
    <ul class="order-item-list">
      {#each cart as item}
        <!-- Cart Item -->
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

    <!-- Total Summary-->
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
      <a href="/merch" class="win7-btn">Edit Cart</a>
    </div>
  </div>
</Window>

<style lang="scss">
  // Order summary styles
  .order-summary {
    .order-title {
      font-size: 1.5rem;
      margin-bottom: 0;
    }

    .order-item {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      border: 1px solid var(--win98-black);

      .item-name {
        font-size: 1.2rem;
        padding-right: 10px;
      }

      img {
        width: 150px;
        align-self: center;
        padding: 5px;
      }
    }

    // Total
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
    }
  }
</style>
