<script lang="ts">
  import TopBorder from './TopBorder.svelte';

  export let windowTitle: string = 'Window Title';
</script>

<div class="window">
  <TopBorder title={windowTitle} />
  <div class="window-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .window {
    position: relative;
    width: 600px;
    height: auto;
    border-top: 2px solid var(--win98-white);
    border-left: 2px solid var(--win98-white);
    border-right: 2px solid var(--win98-darker-gray);
    border-bottom: 2px solid var(--win98-darker-gray);
    background: var(--win98-gray);
    border-top: 2px solid var(--win98-white);

    .window-content {
      overflow: auto;
      padding: 10px;
    }
  }
</style>
