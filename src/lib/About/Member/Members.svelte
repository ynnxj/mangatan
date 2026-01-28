<script lang="ts">
  import { scroll } from '$lib/utils/scroll';
  import { overlayClick } from '$lib/actions/overlayClick';
  import { members } from '$lib/data/members';
  import closeBtn from '$lib/Icons/WindowIcons/CloseIcon.svg';
  import './members.scss';
  import ModalOverlay from '$lib/ModalOverlay/ModalOverlay.svelte';

  // State of selected member
  let selectedMember = $state<string | null>(null);

  // Open and close member modal
  const openMember = (name: string) => (selectedMember = name),
    closeMember = () => (selectedMember = null);

  // Scroll toggle
  $effect(() => {
    scroll.toggle(selectedMember);
    return () => scroll.unlock();
  });
</script>

<!-- Star emoticon -->
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

<!-- About Member Title -->
<h3 class="title-members">⋆ Members ⋆⭒˚.⋆</h3>
<!-- About Member Container -->
<div class="about-members">
  <!-- Member List -->
  <ul>
    {#each members as { name }}
      <li>
        <button class="member-btn" onclick={() => openMember(name)}>
          <!-- TODO: replace placeholders -->
          <img src={`assets/images/${name.toLowerCase()}/${name.toLowerCase()}.png`} alt={name} />
          {name}
        </button>
      </li>
    {/each}
  </ul>
</div>

{#if selectedMember}
  <!-- Modal Overlay -->
  <ModalOverlay />
  <!-- Member Modals -->
  <div class="member {selectedMember.toLowerCase()}" use:overlayClick={closeMember}>
    <!-- Exit Modal Button -->
    <button class="exit-btn win98-btn" onclick={closeMember}
      ><img src={closeBtn} alt="Close button" /></button
    >
    {#each members as { name, Member }}
      {#if name === selectedMember}
        <Member />
      {/if}
    {/each}
  </div>
{/if}
