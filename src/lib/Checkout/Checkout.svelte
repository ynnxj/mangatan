<script lang="ts">
  import MerchHeader from '$lib/Merch/MerchHeader/MerchHeader.svelte';
  import CheckoutForm from './Form/CheckoutForm.svelte';
  import OrderSummary from './OrderSummary.svelte';
</script>

<!-- Checkout Page Content -->
<section class="checkout-page">
  <MerchHeader />
  <div class="checkout-content">
    <div>
      <CheckoutForm />
    </div>
    <div>
      <OrderSummary />
    </div>
  </div>
</section>

<style lang="scss">
  // Checkout content layout
  .checkout-content {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  // Responsive styles
  @media (max-width: 950px) {
    .checkout-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;
    }
  }
</style>
