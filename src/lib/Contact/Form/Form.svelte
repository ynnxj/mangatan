<!--TODO: Add accessibility attributes to all form elements 
and ensure proper labeling for screen readers -->
<form method="post" action="/contact">
  <label for="name">Name:</label>
  <input type="text" aria-label="Name" placeholder="Full name" required />

  <label for="email">Email:</label>
  <input type="email" aria-label="Email" name="email" placeholder="Email adress" required />

  <label for="message">Message:</label>
  <textarea aria-label="Message" placeholder="Write something..." required></textarea>

  <div class="contact-buttons">
    <button type="submit">Send</button>
    <button type="reset">Reset</button>
  </div>
</form>

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

    textarea {
      height: 100px;
    }

    input,
    textarea {
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
        font-size: 1.2rem;
        font-family: 'Orbitron', sans-serif;
        align-self: center;
        text-shadow: 1px 1px 2px black;
        border: 1px solid #f3f3f3;
        box-shadow: 0 0 0 1px #707070;
        border-radius: 15px;
        background: linear-gradient(to bottom, #f2f2f2 0%, #d4d6e6 50%, #8996bb 51%, #cfcfcf 100%);
        color: white;

        &:hover {
          border: 1px solid #ecf7fd;
          box-shadow: 0 0 0 1px #3c7fb1;
          background: linear-gradient(
            to bottom,
            #eaf6fd 0%,
            #d9f0fc 50%,
            #bee6fd 51%,
            #a7d9f5 100%
          );
        }
      }
    }
  }
</style>
