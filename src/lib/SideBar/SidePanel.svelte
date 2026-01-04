<script lang="ts">
  export let side: 'left' | 'right';
</script>

<div class="container {side}">
  {#if side === 'left'}
    <h3>What's up!</h3>
  {:else}
    <h3>Heyy!</h3>
  {/if}
</div>

<style lang="scss">
  .container {
    position: fixed;
    top: 135px;
    width: 240px;
    height: 70vh;
    padding: 20px;
    border: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid var(--win98-darker-gray);
    border-right: 2px solid var(--win98-darker-gray);
    border-radius: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: var(--win98-light-gray);
    --vw-offset: 33vw;

    // TODO: fix this mess like wth is this girly pop
    @media (max-width: 1735px) {
      --vw-offset: 40vw;
    }

    @media (max-width: 1415px) {
      --vw-offset: 49vw;
    }

    &.left {
      left: calc(50% - var(--vw-offset));
    }

    &.right {
      right: calc(50% - var(--vw-offset));
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }
</style>
