<script lang="ts">
  import TopBorder from './TopBorder.svelte';

  export let windowTitle: string = 'Window Title',
    width: string | null = null,
    Class: string = '';
</script>

<div class="window {Class}" style={width ? `width: ${width};` : undefined}>
  <TopBorder title={windowTitle} />
  <div class="window-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .window {
    position: relative;
    max-width: none;
    height: auto;
    border-top: 2px solid var(--win98-white);
    border-left: 2px solid var(--win98-white);
    border-right: 2px solid var(--win98-darker-gray);
    border-bottom: 2px solid var(--win98-darker-gray);
    background: var(--win98-gray);
    margin-bottom: 20px;

    .window-content {
      overflow: auto;
      padding: 10px;
    }
  }

  @media (max-width: 768px) {
    .window {
      max-width: 500px;
    }
  }

  @media (max-width: 568px) {
    .window {
      max-width: 400px;
    }
  }
</style>
