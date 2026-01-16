<script lang="ts">
  import CheckoutForm from './Form/CheckoutForm.svelte';
  import OrderSummary from './OrderSummary.svelte';
</script>

<section class="checkout-page">
  <div class="merch-page-header">
    <img
      class="merch-page-logo"
      src="/assets/images/mangatan/mangatan-logo.PNG"
      alt="Mångatan logo"
    />
    <img
      class="merch-page-title"
      src="/src/lib/Icons/Merch/GlitterTitle.gif"
      alt="Glitter merch logo"
    />
  </div>

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
  .merch-page-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0 40px 0;
    border-bottom: 30px solid transparent;
    border-image: url('/src/lib/Icons/Merch/Divider.webp') 30 stretch;
    border-image-slice: 30;
    border-image-width: 1;
    border-image-outset: 0;

    .merch-page-title {
      width: 250px;
      margin-left: 190px;
      margin-bottom: -60px;
      height: auto;
      z-index: 10;
    }

    // Maybe fix this later
    .merch-page-logo {
      filter: invert(100%);
      width: 500px;
      margin-right: -360px;
      margin-bottom: -60px;
      z-index: 10;
    }
  }
</style>
