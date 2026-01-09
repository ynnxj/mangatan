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
  <h3>Cart</h3>

  {#if cart.length === 0}
    <p>Cart is empty</p>
  {:else}
    <ul>
      {#each cart as item}
        <li>{item.name}: {item.price} SEK</li>

        <button>+</button>
        <input type="number" min="0" />
        <button>-</button>
        <button>Remove</button>
      {/each}
    </ul>

    <p>Subtotal: {cartTotal} SEK</p>
  {/if}
</div>
