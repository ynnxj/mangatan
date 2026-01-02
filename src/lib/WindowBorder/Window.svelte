<script lang="ts">
  import TopBorder from './TopBorder.svelte';
</script>

<div class="window">
  <TopBorder title="About Us" />
  <div class="window-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .window {
    position: relative;
    width: 600px;
    height: 400px;
    border-top: 2px solid var(--win98-white);
    border-left: 2px solid var(--win98-white);
    border-right: 2px solid var(--win98-darker-gray);
    border-bottom: 2px solid var(--win98-darker-gray);
    background: var(--win98-gray);
    border-top: 2px solid var(--win98-white);

    .window-content {
      flex: 1;
      overflow: auto;
      padding: 10px;
    }
  }
</style>
