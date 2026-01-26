<script lang="ts">
  import ModalOverlay from '$lib/ModalOverlay/ModalOverlay.svelte';
  import type { Cart } from '$lib/types/merch';
  import { patterns } from '$lib/utils/validation';
  import Window from '$lib/WindowBorder/Window.svelte';
  import FeedbackModal from '../FeedbackModal.svelte';
  import './checkout-form.scss';

  // State variables
  let cart: Cart[] = $state([]),
    showFeedbackModal = $state(false),
    errors = $state<Record<string, string>>({}),
    // Temporary user data for testing
    form = $state({
      name: 'Test User',
      email: 'test@example.com',
      personalId: '123456-7890',
      phone: '0701234567',
      cardNumber: '4111111111111111',
      postalAddress: 'Test Street 123',
      zipCode: '123 45',
      cvv: '123'
    });

  // Load cart from localStorage on page load
  $effect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) {
      cart = JSON.parse(stored);
    }
  });

  /**
   * Handles the checkout process by sending cart data to the server.
   * @return - true if checkout is successful, false otherwise.
   */
  const checkoutCart = async () => {
    try {
      // Maybe figure out a better solution for this, visually atleast.
      if (!cart || cart.length === 0) {
        console.log('Cart is empty, cannot checkout.');
        return false;
      }

      const res = await fetch('/merch/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
      });

      const data = await res.json();
      console.log('Server response data:', data);

      if (!res.ok) {
        return false;
      }

      return true;
    } catch (error) {
      console.error('Checkout error:', error);
      return false;
    }
  };

  /**
   * Form submit handler.
   * Validates form inputs and handles form submission.
   */
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    errors = {};
    let isValid = true;

    if (!form.name) {
      errors.name = 'Enter a valid name';
      isValid = false;
    }

    if (!form.email) {
      errors.email = 'Enter a valid email';
      isValid = false;
    }

    if (!patterns.personalId.test(form.personalId)) {
      errors.personalId = 'Invalid ID';
      isValid = false;
    }

    if (!patterns.phone.test(form.phone)) {
      errors.phone = 'Invalid phone number';
      isValid = false;
    }

    const cleanCard = form.cardNumber.replace(/\s/g, '');
    if (
      !patterns.cardNumber.visa.test(cleanCard) &&
      !patterns.cardNumber.mastercard.test(cleanCard) &&
      !patterns.cardNumber.amex.test(cleanCard)
    ) {
      errors.cardNumber = 'Invalid card number';
      isValid = false;
    }

    if (!patterns.postalAddress.test(form.postalAddress)) {
      errors.postalAddress = 'Invalid postal address';
      isValid = false;
    }

    if (!patterns.zipCode.test(form.zipCode)) {
      errors.zipCode = 'Invalid zip code';
      isValid = false;
    }

    if (!patterns.cvv.test(form.cvv)) {
      errors.cvv = 'Must be 3-4 digits long';
      isValid = false;
    }

    if (isValid) {
      const success = await checkoutCart();
      if (success) {
        showFeedbackModal = true;
        setTimeout(() => {
          cart = [];
          localStorage.removeItem('cart');
        }, 0);
      }
    }
  };
</script>

<!-- Checkout From Window -->
<Window windowTitle="Checkout.exe" width="450px">
  <form onsubmit={handleSubmit}>
    <!-- Name -->
    <label for="name">Name:</label>
    <input
      type="text"
      aria-label="Name"
      bind:value={form.name}
      placeholder="Full name"
      autocomplete="name"
    />
    {#if errors.name}<p>{errors.name}</p>{/if}

    <!-- Email -->
    <label for="email">Email:</label>
    <input
      type="email"
      aria-label="Email"
      name="email"
      bind:value={form.email}
      placeholder="Email adress"
      autocomplete="email"
    />
    {#if errors.email}<p>{errors.email}</p>{/if}

    <!-- Phone Number -->
    <label for="phone">Phone Number:</label>
    <input
      id="phone"
      type="tel"
      bind:value={form.phone}
      placeholder="0701234567 or +46701234567"
      autocomplete="tel"
    />
    {#if errors.phone}<p>{errors.phone}</p>{/if}

    <!-- Personal ID -->
    <label for="personalId">Personal ID</label>
    <input id="personalId" type="text" bind:value={form.personalId} placeholder="YYMMDD-XXXX" />
    {#if errors.personalId}<p>{errors.personalId}</p>{/if}

    <!-- Postal Address -->
    <label for="postalAddress">Postal Adress</label>
    <input
      id="postalAddress"
      type="text"
      placeholder="Faux Street 123"
      bind:value={form.postalAddress}
      autocomplete="address-line1"
    />
    {#if errors.postalAddress}<p>{errors.postalAddress}</p>{/if}

    <!-- Zip Code -->
    <label for="zipCode">Zip Code</label>
    <input
      id="zipCode"
      type="text"
      bind:value={form.zipCode}
      placeholder="123 45"
      autocomplete="postal-code"
    />
    {#if errors.zipCode}<p>{errors.zipCode}</p>{/if}

    <!-- Card Number -->
    <label for="cardNumber">Card Number:</label>
    <input
      id="cardNumber"
      type="text"
      bind:value={form.cardNumber}
      placeholder="1234 5678 9012 3456"
    />
    {#if errors.cardNumber}<p>{errors.cardNumber}</p>{/if}

    <!-- CVV -->
    <label for="cvv">cvv</label>
    <input id="cvv" type="text" bind:value={form.cvv} placeholder="123" maxlength="4" />
    {#if errors.cvv}<p>{errors.cvv}</p>{/if}

    <!-- Submit and Reset Buttons -->
    <div class="contact-buttons">
      <button type="submit">Pay</button>
      <button type="reset">Reset</button>
    </div>
  </form>
</Window>

<!-- Feedback Modal -->
{#if showFeedbackModal}
  <ModalOverlay />
  <div class="confrimation-modal">
    <FeedbackModal />
  </div>
{/if}
