<script lang="ts">
  import { patterns } from '$lib/utils/validation';
  import Window from '$lib/WindowBorder/Window.svelte';
  import FeedbackModal from './FeedbackModal.svelte';

  let showFeedbackModal = $state(false);

  let form = $state({
    name: 'Test User',
    email: 'test@example.com',
    personalId: '123456-7890',
    phone: '0701234567',
    cardNumber: '4111111111111111',
    postalAddress: 'Test Street 123',
    zipCode: '123 45',
    cvv: '123'
  });
  let errors = $state<Record<string, string>>({});

  const handleSubmit = (e: Event) => {
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
      showFeedbackModal = true;
      localStorage.removeItem('cart');
    }
  };
</script>

<Window windowTitle="Form.exe">
  <form onsubmit={handleSubmit}>
    <label for="name">Full Name:</label>
    <input
      type="text"
      aria-label="Name"
      bind:value={form.name}
      placeholder="Full name"
      autocomplete="name"
    />
    {#if errors.name}<p>{errors.name}</p>{/if}

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

    <label for="phone">Phone Number:</label>
    <input
      id="phone"
      type="tel"
      bind:value={form.phone}
      placeholder="0701234567 or +46701234567"
      autocomplete="tel"
    />
    {#if errors.phone}<p>{errors.phone}</p>{/if}

    <label for="personalId">Personal ID</label>
    <input id="personalId" type="text" bind:value={form.personalId} placeholder="YYMMDD-XXXX" />
    {#if errors.personalId}<p>{errors.personalId}</p>{/if}

    <label for="postalAddress">Postal Adress</label>
    <input
      id="postalAddress"
      type="text"
      placeholder="Faux Street 123"
      bind:value={form.postalAddress}
      autocomplete="address-line1"
    />
    {#if errors.postalAddress}<p>{errors.postalAddress}</p>{/if}

    <label for="zipCode">Zip Code</label>
    <input
      id="zipCode"
      type="text"
      bind:value={form.zipCode}
      placeholder="123 45"
      autocomplete="postal-code"
    />
    {#if errors.zipCode}<p>{errors.zipCode}</p>{/if}

    <label for="cardNumber">Card Number:</label>
    <input
      id="cardNumber"
      type="text"
      bind:value={form.cardNumber}
      placeholder="1234 5678 9012 3456"
    />
    {#if errors.cardNumber}<p>{errors.cardNumber}</p>{/if}

    <label for="cvv">cvv</label>
    <input id="cvv" type="text" bind:value={form.cvv} placeholder="123" maxlength="4" />
    {#if errors.cvv}<p>{errors.cvv}</p>{/if}

    <div class="contact-buttons">
      <button type="submit">Pay</button>
      <button type="reset">Reset</button>
    </div>
  </form>
</Window>

{#if showFeedbackModal}
  <button class="message-overlay" aria-label="Message Overlay"></button>
  <div class="confrimation-modal">
    <FeedbackModal />
  </div>
{/if}

<style lang="scss">
  .message-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 20;
  }

  form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1em;
      font-family: 'Orbitron', sans-serif;
      font-weight: 500;
    }

    input {
      margin-top: 5px;
      padding: 10px;
      font-size: 1em;
      width: 100%;
      font-family: inherit;
    }

    .contact-buttons {
      display: flex;
      justify-content: end;
      gap: 15px;
      margin: 15px 0;

      button {
        padding: 10px 30px;
        margin-bottom: 15px;
        font-size: 1.2rem;
        font-family: 'Orbitron', sans-serif;
        align-self: center;
        text-shadow: 1px 1px 2px var(--win98-black);
        border: 1px solid var(--win98-white);
        box-shadow: 0 0 0 1px var(--win98-dark-gray);
        border-radius: 15px;
        background: var(--win7-button-face);
        color: white;

        &:hover {
          border: 1px solid #ecf7fd;
          box-shadow: 0 0 0 1px var(--win98-light-blue);
          background: var(--win7-button-hover);
        }
      }
    }
  }

  .confrimation-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }
</style>
