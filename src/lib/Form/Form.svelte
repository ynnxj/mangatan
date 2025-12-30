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
    display: flex;
    flex-direction: column;
    max-width: 400px;

    label {
      margin-top: 1em;
    }

    input,
    textarea {
      margin-top: 0.5em;
      padding: 0.5em;
      font-size: 1em;
    }

    .contact-buttons {
      display: flex;
      justify-content: space-between;
      gap: 1em;
    }

    // TODO: Refactor button styles later
    button {
      margin-top: 1.5em;
      padding: 0.75em;
      font-size: 1em;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      width: 100%;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
</style>
