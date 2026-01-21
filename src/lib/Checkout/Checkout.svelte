<script lang="ts">
  import MerchHeader from '$lib/Merch/MerchHeader/MerchHeader.svelte';
  import CheckoutForm from './Form/CheckoutForm.svelte';
  import OrderSummary from './OrderSummary.svelte';
</script>

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
  .checkout-content {
    display: flex;
    gap: 30px;
  }
</style>
