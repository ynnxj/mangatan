<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import SpinningCd from '$lib/Icons/SpinningCd.gif';
  import { members } from '../../../data/members';
  import './about-band.scss';

  let selectedMember = $state<string | null>(null);
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
⠀⠀⠀⠀⠀⠀⠀⠠⡧⠀⠀⠀⠄⠀⣆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡄⠀⠀⠀⢺⠂⠀⠀⠀⢀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣧
⠀⠐⠗⠀⠀⠀⠀⠁⠀⠀⠀⣼⣿⡏⣿⣷⡀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠐⠺⠂⠀⠀⠀⠀⠀⠀⠄
⠤⣤⣤⣤⣤⣤⣤⣤⣤⣿⣿⠇⠀⢿⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⠶⠶⠶⠶⠶⠶⠶⠶⠶⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒
⠀⠀⠘⢿⣿⣿⣟⠛⠛⠛⠛⠀⠀⠀⠛⠛⠛⠛⠋⠉⠉⠉
⠀⠀⠁⠀⠈⠛⣿⣿⣦
⠀⠀⠀⠀⠀⠀⠀⢹⣿⡿
⠀⠀⠀⠠⡧⠀⠀⣾⣿⠁⢀⣤⣾⣦⡀
⠀⠠⠀⠀⠀⠀⣸⣿⢇⣶⣿⠟⠙⠻⣿⣄
⠀⠀⠀⠀⠀⢠⣿⣿⠿⠋⠁⠀⠀⠀⠀⠉⠳⡄
⠀⠀⠀⠀⠀⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈
  </pre>

  <h3 class="title-members">⋆ Members ⋆⭒˚.⋆𝜗𝜚</h3>
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
    <div class="member {selectedMember.toLowerCase()}">
      <button class="exit-btn" onclick={closeMember}>X</button>
      {#each members as { name, Member }}
        {#if name === selectedMember}
          <Member />
        {/if}
      {/each}
    </div>
  {/if}
</Window>
