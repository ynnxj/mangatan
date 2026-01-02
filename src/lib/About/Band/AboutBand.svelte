<script lang="ts">
  import Angela from '../Member/Angela.svelte';
  import Benjamin from '../Member/Benjamin.svelte';
  import Frida from '../Member/Frida.svelte';
  import Luna from '../Member/Luna.svelte';
  import Window from '$lib/WindowBorder/Window.svelte';
  import SpinningCd from '$lib/Icons/SpinningCd.gif';

  let selectedMember = $state<string | null>(null);

  const members = [
    { name: 'Angela', Member: Angela },
    { name: 'Benjamin', Member: Benjamin },
    { name: 'Frida', Member: Frida },
    { name: 'Luna', Member: Luna }
  ];

  const openMember = (name: string) => (selectedMember = name),
    closeMember = () => (selectedMember = null);
</script>

<Window windowTitle="About Us">
  <h2 class="title">―⋆Mångatan⋆˙</h2>
  <div class="about">
    <!-- TODO: fix image sizing -->
    <img
      class="image"
      src="assets/images/group-portrait-cold.jpg"
      alt="Group portrait of the band Mångatan"
    />

    <div class="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam dolorem assumenda ad
        perspiciatis dignissimos numquam vitae tenetur aliquam, mollitia iste laudantium, debitis
        molestias officia doloribus, neque dolor atque ipsum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
      <img class="icon" src={SpinningCd} alt="Spinning CD" />
      <p>
        Ea aperiam dolorem assumenda ad perspiciatis dignissimos numquam vitae tenetur aliquam,
        mollitia iste laudantium, debitis molestias officia doloribus, neque dolor atque ipsum.
      </p>
    </div>
  </div>

  <pre>
⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁⠀⢠⣄⡀⢀⣴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀⠀⢀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀⠒⠻⠿⣿⡿⠿⠓⠂⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣤⠀⠀⣿⠁⠀⠀⠀⢀⣴⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⡿⠏⠀⢀⠀⠀⠿⣶⣤⣤⣤⣄⣀⣴⣿⡿⢻⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠟⠁⠀⢀⣼⠀⠀⠀⠹⣿⣟⠿⠿⠿⡿⠋⠀⠘⣿⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢳⣶⣶⣿⣿⣇⣀⠀⠀⠙⣿⣆⠀⠀⠀⠀⠀⠀⠛⠿⣿⣦⣤⣀⠀⠀
⠀⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⠿⠋⠁⠀⣹⣿⠳⠀⠀⠀⠀⠀⠀⢀⣠⣽⣿⡿⠟⠃
⠀⠀⠀⠀⠀⢰⠿⠛⠻⢿⡇⠀⠀⠀⣰⣿⠏⠀⠀⢀⠀⠀⠀⣾⣿⠟⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⣰⣿⣿⣾⣿⠿⢿⣷⣀⢀⣿⡇⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠁⠀⠀⠀⠀⠙⢿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀
      </pre>

  <h3 class="title">Members</h3>
  <div class="about-members">
    <ul>
      {#each members as { name }}
        <li>
          <button onclick={() => openMember(name)}>
            <!-- TODO: replace placeholders -->
            <img src={`assets/images/${name.toLowerCase()}.png`} alt={name} />
            {name}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  {#if selectedMember}
    <div class="member">
      <button onclick={closeMember}>Close</button>
      {#each members as { name, Member }}
        {#if name === selectedMember}
          <Member />
        {/if}
      {/each}
    </div>
  {/if}
</Window>

<style lang="scss">
  // TODO: Fix styles later

  .title {
    font-size: 5rem;
    font-weight: 400;
    margin: 10px 0;
    padding: 0 10px;
    color: white;
    background-color: var(--win98-darker-gray);
    font-family: 'Orbitron', sans-serif;
  }

  .about {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
    background-color: var(--win98-light-gray);
    border: 1px solid var(--win98-darker-gray);
    box-shadow: 1px 1px 4px var(--win98-darker-gray);

    .image {
      min-width: 300px;
      width: 500px;
      height: auto;
      border: 1px solid var(--win98-black);
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 600px;
      text-align: justify;

      .icon {
        align-self: last baseline;
        max-width: 20px;
        width: auto;
        height: auto;
      }
    }
  }

  pre {
    text-align: center;
  }

  .about-members {
    text-align: center;

    ul {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;

      li {
        margin: 10px;

        button {
          background: none;
          border: none;
          color: var(--win98-accent-pink);
          text-decoration: underline;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;

          // TODO: add hover effect/transition
          img {
            width: 200px;
            height: auto;
            margin-bottom: 10px;
            border-radius: 9px;
            filter: drop-shadow(1px 1px 5px var(--win98-darker-gray)) brightness(1) contrast(1.3)
              grayscale(50%);
          }
        }
      }
    }
  }

  .member {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border: 2px solid #000;
  }
</style>
