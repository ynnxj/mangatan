<script lang="ts">
  // TODO: Will change later to actual home menu items
  const items = [
    { name: 'Music', path: '/music' },
    { name: 'Shows', path: '/shows' },
    { name: 'Members', path: '/members' }
  ];

  let { show, onclose } = $props();
</script>

{#if show}
  <div
    class="modal-container"
    onclick={onclose}
    onkeydown={(e) => e.key === 'Escape' && onclose?.()}
    role="button"
    tabindex="0"
  >
    <div class="start-menu">
      {#each items as item}
        <a href={item.path} onclick={(e) => e.stopPropagation()} class="link">
          {item.name}
        </a>
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  // TODO: Refactor styles later
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);

    .start-menu {
      position: fixed;
      background: #c0c0c0;
      border: 2px solid;
      border-color: white white #808080 #808080;
      width: 180px;
      padding: 8px;
      bottom: 40px;
      left: 8px;

      .link {
        display: block;
        padding: 6px;
        color: black;
        text-decoration: none;
        &:hover {
          background: #000080;
          color: white;
        }
      }
    }
  }
</style>
