<script lang="ts">
  import Window from '$lib/WindowBorder/Window.svelte';
  import { scroll } from '$lib/utils/scroll';
  import { overlayClick } from '$lib/actions/overlayClick';
  import { members } from '../data/members';
  import AboutBand from './Band/AboutBand.svelte';
  import './about-band.scss';

  let selectedMember = $state<string | null>(null);
  const openMember = (name: string) => (selectedMember = name),
    closeMember = () => (selectedMember = null);

  // Scroll toggle
  $effect(() => {
    scroll.toggle(selectedMember);
    return () => scroll.unlock();
  });
</script>

<Window windowTitle="About Us">
  <AboutBand />
  <pre class="star-emoticon">
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
            <img src={`assets/images/${name.toLowerCase()}/${name.toLowerCase()}.png`} alt={name} />
            {name}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  {#if selectedMember}
    <div class="member-overlay" onclick={closeMember} aria-label="Close member modal"></div>

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
