<script lang="ts">
  export let side: 'left' | 'right';
</script>

<div class="container" class:left={side === 'left'} class:right={side === 'right'}>
  <h3>{side}</h3>

  {#if side === 'left'}
    <div>Some left content</div>
  {:else}
    <div>Some right content</div>
  {/if}
</div>

<style lang="scss">
  .container {
    position: fixed;
    top: 15%;
    padding: 50px;
    border: 2px solid black;
    width: 240px;
  }

  .left {
    left: 15%;
  }

  .right {
    right: 15%;
  }
</style>
