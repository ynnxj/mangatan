<script lang="ts">
  import { patterns } from '$lib/utils/validation';
  import Window from '$lib/WindowBorder/Window.svelte';

  let form = $state({
    personalId: '',
    phone: '',
    cardNumber: '',
    postalAddress: '',
    zipCode: '',
    cvv: ''
  });

  let errors = $state<Record<string, string>>({});
</script>

<Window windowTitle="Form.exe">
  <form method="post" action="/contact">
    <label for="name">Name:</label>
    <input type="text" aria-label="Name" placeholder="Full name" autocomplete="name" required />

    <label for="email">Email:</label>
    <input
      type="email"
      aria-label="Email"
      name="email"
      placeholder="Email adress"
      autocomplete="email"
      required
    />

    <label for="phone">Phone Number:</label>
    <input
      id="phone"
      type="tel"
      placeholder="0701234567 or +46701234567"
      autocomplete="tel"
      required
    />

    <label for="personalId">Personal ID</label>
    <input id="personalId" type="text" placeholder="YYMMDD-XXXX" required />

    <label for="postalAddress">Postal Adress</label>
    <input
      id="postalAddress"
      type="text"
      placeholder="Faux Street 123"
      autocomplete="address-line1"
      required
    />

    <label for="zipCode">Zip Code</label>
    <input id="zipCode" type="text" placeholder="123 45" autocomplete="postal-code" required />

    <label for="cardNumber">Card Number:</label>
    <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />

    <label for="cvv">CVV</label>
    <input id="cvv" type="text" placeholder="123" maxlength="4" required />

    <div class="contact-buttons">
      <button type="submit">Pay</button>
      <button type="reset">Reset</button>
    </div>
  </form>
</Window>

<style lang="scss">
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
</style>
