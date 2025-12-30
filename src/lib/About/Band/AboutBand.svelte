<script lang="ts">
  import Angela from '../Member/Angela.svelte';
  import Benjamin from '../Member/Benjamin.svelte';
  import Frida from '../Member/Frida.svelte';
  import Luna from '../Member/Luna.svelte';

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

<section>
  <h2>Mångatan</h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam dolorem assumenda ad
    perspiciatis dignissimos numquam vitae tenetur aliquam, mollitia iste laudantium, debitis
    molestias officia doloribus, neque dolor atque ipsum!
  </p>

  <div>
    <h3>Members</h3>
    <ul>
      {#each members as { name }}
        <li>
          <button onclick={() => openMember(name)}>{name}</button>
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
</section>

<style lang="scss">
  // TODO: Fix styles later
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
